import DOM from "@lib/Helfy/Render/DOM";

export function View<T extends {new(...args: any[]): {}}>(Base: T) {
  Object.defineProperties(Base.prototype, {
    DOM: {
      value: undefined,
      writable: true,
    },
    el: {
      value: undefined,
      writable: true,
    },
    view: {
      get() {
        return this.el;
      }
    },
    update: {
      value: function() {
        const newDOM = this.render() as any;
        DOM.updateDomNode(this.el, this.DOM, newDOM);
        this.DOM = newDOM;
      }
    },
    updateProps: {
      value: function(newProps) {
        this.props = newProps;
        this.update();
      }
    },
    mount: {
      value: function() {
        DOM.mount(this);
      }
    }
  })
  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
      if (this['$_stateFields']?.length) {
        /** Create State properties */
        this['$_stateFields'].forEach((field) => {
          const tempValue = this[field];
          delete this[field];
          Object.defineProperty(this, `$_${field}`, { value: tempValue, writable: true });
          Object.defineProperty(this, field, {
            get() {
              return this[`$_${field}`];
            },
            set(value) {
              this[`$_${field}`] = value;
              this.update();
            }
          });
          delete this['$_stateFields'];
        });
      }
      if (this['$_observableFields']?.length) {
        /** Create State properties */
        this['$_observableFields'].forEach(({ field, store, storeField }) => {
          delete this[field];
          Object.defineProperty(this, field, { value: store[storeField], writable: true });
          (store as any).subscribe(storeField, (value) => {
            this[field] = value;
            (this as any).update();
          });
        });
        delete this['$_observableFields'];
      }
      (this as any).mount();
    }
  }
}
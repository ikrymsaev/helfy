import { Subscriber } from "@lib/store/Store";

export function Store<T extends {new(...args: any[]): {}}>(Base: T) {
  Object.defineProperties(Base.prototype, {
    subsribers: { value: new Map() },
    subscribe: { value: function(field: keyof T, sub: Subscriber) {
      if (!this.subsribers.has(field)) this.subsribers.set(field, new Set());

      this.subsribers.get(field).add(sub);
      return () => {
          this.subsribers.get(field).delete(sub);
      };
    }},
    unsubscribe: { value: function(field: keyof T, sub: Subscriber) {
      this.subsribers.get(field)?.delete(sub);
    }}
  });

  return class extends Base {
    constructor(...args: any[]) {
      super(...args);
      if (this['$_observableFields']?.length) {
        /** Create observable properties */
        this['$_observableFields'].forEach((field) => {
          const tempValue = this[field];
          delete this[field];
          Object.defineProperty(this, `$_${field}`, { value: tempValue, writable: true });
          Object.defineProperty(this, field, {
            get() {
              return this[`$_${field}`];
            },
            set(value) {
              if (this[`$_${field}`] !== value) {
                this[`$_${field}`] = value;
                this.subsribers.get(field)?.forEach((sub: Subscriber) => {
                  sub(value, () => this.subsribers.get(field)?.delete(sub))
                });
              }
            }
          });
        });
      }
    }
  }
}
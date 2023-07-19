
import { Store, Subscriber } from '@lib/store/Store';
import DOM from './DOM';

export abstract class View<P extends object = {}, S extends object = {}> {
    props?: P;
    state?: S;
    private DOM: any;
    private el: DocumentFragment;
    abstract render(): void;
    protected onMount?(): void;

    constructor(props?: P, state?: S) {
        this.props = props;
        if (state) this.createState(state);
        this.mount();
    }

    protected subscribe<T extends object>(...targets: [Store<T>, keyof T | Array<keyof T>][]) {
        targets.forEach((target) => {
            const [store, fields] = target;
            if (Array.isArray(fields)) {
                fields.forEach((field) => (store as unknown as Store<T>).subscribe(field, this.update.bind(this)))
            } else {
                (store as unknown as Store<T>).subscribe(fields, this.update.bind(this))
            }
        })
    }

    protected onEffect<T>(store: Store<T>, field: keyof T, callback: Subscriber) {
        store.subscribe(field, callback)
    }
    public updateProps(newProps: P) {
        this.props = newProps;
        this.update();
    }
    public get view():DocumentFragment {
        return this.el;
    }
    protected createState(initialState: S): void {
        this.state = new Proxy({ ...initialState }, {
            set: (target, prop, newVal) => {
                if (prop in target) {
                    target[prop] = newVal;
                    this.update();
                    return true;
                }
                return false;
            }
        }) as S;
    }
    private update = (): void => {
        const newDOM = this.render() as any;
        DOM.updateDomNode(this.el, this.DOM, newDOM);
        this.DOM = newDOM;
    }
    private mount(): void {
        DOM.mount(this);
    }
}
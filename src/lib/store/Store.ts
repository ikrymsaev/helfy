export type Subscriber = (value: unknown, unsubscribe: () => void) => void;

export class Store<T> {
    state: T extends object ? T : object;
    subsribers: Map<keyof T, Set<Subscriber>> = new Map(); 
    subscribe(field: keyof T, sub: Subscriber) {
        if (!this.subsribers.has(field)) this.subsribers.set(field, new Set());

        this.subsribers.get(field).add(sub);

        return () => {
            this.subsribers.get(field).delete(sub);
        };
    }
    unsubscribe(field: keyof T, sub: Subscriber) {
        this.subsribers.get(field)?.delete(sub);
    }
    constructor(storeObj: T extends object ? T : object) {
        this.state = new Proxy(storeObj, {
            set: (target: T extends object ? T : object, prop: string | symbol, newValue: any) => {
                if (typeof prop === 'symbol') return false;

                const field = prop as unknown as keyof T;
            
                if (target.hasOwnProperty(field) && target[prop] !== newValue) {
                    target[prop] = newValue;
                    if (!this.subsribers.has(field)) {
                        return true;
                    }

                    this.subsribers.get(field).forEach((sub: Subscriber) => {
                        sub(newValue, () => this.subsribers.get(field)?.delete(sub))
                    });
                    return true;
                }
                return true;
            },
            get: (target: T extends object ? T : object, prop: string | symbol): any => {
                if (target.hasOwnProperty(prop)) return target[prop];
            }
        });
    }
}
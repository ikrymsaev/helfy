export function observe<T>(store: T, storeField: keyof T) {

  return function(target, field) {
    if (typeof store[storeField] === 'function') throw new Error('Function cannot be decorated by @observe');
    if (!target?.$_observableFields) {
      Object.defineProperty(target, '$_observableFields', {
        value: []
      })
    }
    target.$_observableFields.push({ field, store, storeField });
  }
}
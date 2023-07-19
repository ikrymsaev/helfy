export function observable(target, field) {
  if (typeof target[field] === 'function') throw new Error('Function cannot be decorated by @observable');
  if (!target?.$_observableFields) {
    Object.defineProperty(target, '$_observableFields', {
      value: []
    })
  }
  target.$_observableFields.push(field);
}
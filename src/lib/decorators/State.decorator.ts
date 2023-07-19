export function state(target, field) {
  if (typeof target[field] === 'function') throw new Error('Function cannot be decorated by @state');
  if (!target?.$_stateFields) {
    Object.defineProperty(target, '$_stateFields', {
      value: []
    })
  }
  target.$_stateFields.push(field);
}
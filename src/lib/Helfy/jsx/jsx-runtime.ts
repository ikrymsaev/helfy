export function jsx(tag, params) {
  const { children, ...props } = params;
  const nodeJsx = {
    tag: tag,
    props,
    children: Array.isArray(children) ? children : [children]
  }
  if (typeof tag === 'function') Object.defineProperty(nodeJsx, '$_type', { value: '_view' });
  if (props.$_key) Object.defineProperty(nodeJsx, '$_key', { value: props.$_key });
  return nodeJsx;
}
export function jsxs(tag, params) {
  const { children, ...props } = params;
  const nodeJsx = {
    tag: tag,
    props,
    children: Array.isArray(children) ? children : [children]
  }
  if (props.$_key) Object.defineProperty(nodeJsx, '$_key', { value: props.$_key });

  return nodeJsx;
} 
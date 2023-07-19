export class JSX {
  static setElementAttributes(element, props) {
    Object.entries(props || {}).forEach(([name, value]) => {
      if (name === '$_key') element.setAttribute('key', value.toString());
      if (name === '$_key') return;
      if (name.startsWith('on') && name.toLowerCase() in window) {
        element.addEventListener(name.toLowerCase().substring(2), value)
      }
      else if (name === 'html') element.innerHTML = value
      else if (name === 'class') {
        if (typeof value === 'string') {
          element.className += value;
        }
        if (Array.isArray(value)) {
          const res = [];
          value.forEach((valEl) => {
            if (Array.isArray(valEl)) {
              const [style, condition] = valEl;
              if (condition) res.push(style);
            }
            res.push(valEl);
          })
          element.className += res.join(' ');
        }
      } 
      else if (name === 'style' && typeof value === 'object') {
        const styleString = Object
          .entries(value)
          .map(([k, v]) => v !== null && v !== undefined ? `${k.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())}:${v.toString()}` : '')
          .join(';');
        element.setAttribute('style', styleString)
      } else element.setAttribute(name, value.toString())
    });

    return element;
  }
  static createElement(tag, props) {
    const element = document.createElement(tag) as any;
    this.setElementAttributes(element, props);

    return element;
  }

  private static createNode(jsx: any, missChilds?: boolean): any {
    if (!jsx) return null; 
    const { tag, props, children } = jsx;
    if (jsx?.$_type) return this._jsx(jsx);
  
    const element = this.createElement(tag, props);

    if (!missChilds && children?.length) {
      children.forEach((child) => {
        if (child) {
          if (child.$_type === '_view') {
            JSX._jsx(child);
          } else if (typeof child === 'string' || typeof child === 'number') {
            element.append(document.createTextNode(typeof child === 'number' ? child.toString() : child));
          } else if (child) {
            const childNode = this._jsx(child);
            childNode !== null && element.append(childNode)
          }
        }
      })
    }

    return element;
  }
  private static createNodesList(items: any[]) {
    const fragment = document.createDocumentFragment();
    fragment.append(...items.map((item) => {
      if (item.$_type === '_view') {
        return new item.tag(item.props).view;
      }
      return this.createNode(item) as string | Node;
    }))

    return fragment;
  }

  static _jsx(domNode) {
    if (typeof domNode === 'string') return document.createTextNode(domNode);
    if (typeof domNode === 'number') return document.createTextNode(domNode.toString());
    if (domNode?.$_type) {
      let result = null;
      const { $_type, $_node, $_condition, $_items } = domNode;
      switch ($_type) {
        case('_view'): {
          if (!domNode.$_ref) {
            const view = new domNode.$_view(domNode.$_props);
            domNode.$_ref = view;
            result = view;
          }
          break;
        }
        case('_if'):
          if (!!$_condition) {
            result = this.createNode($_node);
          }
          break;
        case('_ifelse'): {
          result = this.createNode($_node);
          break;
        }
        case('_forin'): {
          result = this.createNodesList($_items);
          break;
        }
        default:
            break;
      }

      return result;
    }

    return this.createNode(domNode);
  }
}
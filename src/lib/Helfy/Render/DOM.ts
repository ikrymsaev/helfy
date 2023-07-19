import { JSX } from "./JSX";

export default class DOM {
  static mount(target): void {
    target.DOM = target.render();
    target.el = JSX.createElement(target.DOM.tag, target.DOM.props);
    this.mountChildren(target.el, target.DOM.children)
    target.onMount?.();
  }
  private static mountChildren(parentNode, children) {
    children?.forEach((child) => {
        if (!child) return;
        if (typeof child === 'string') {
            parentNode.append(document.createTextNode(child))
        }
        else if (typeof child === 'number') {
            parentNode.append(document.createTextNode(child.toString()))
        }
        else if (this.isView(child)) {
            const component = new child.$_view(child.$_props);
            child.$_ref = component;
            parentNode.append(component.view);
        }
        else if (this.isCondition(child)) {
            if (child.$_condition) {
                this.mountChildren(parentNode, [child.$_node]);
            }
        }
        else if (this.isElseCondition(child)) {
            this.mountChildren(parentNode, [child.$_node]);
        }
        else if (this.isForin(child)) {
            this.mountChildren(parentNode, child.$_items);
        }
        else if (this.isJSX(child)) {
            const node = JSX.createElement(child.tag, child.props);
            if (child.children) {
                this.mountChildren(node, child.children)
            }
            parentNode.append(node)
        }
    })
  }

  static updateChildren(parentNode: any, newChilds: any[]) {
    const childs = [];
    for(let i = 0; i < newChilds.length; i++) {
        if (typeof newChilds[i] === 'string') {
            childs.push(document.createTextNode(newChilds[i]))
            return;
        }
        if (typeof newChilds[i] === 'number') {
            childs.push(document.createTextNode(newChilds[i].toString()))
            return;
        }
        const el = JSX._jsx(newChilds[i]);
        if (el !== null) {
            childs.push(JSX._jsx(newChilds[i]));
        }
    }
    parentNode.replaceChildren(...childs);
  }

  /** Обновить структуру списка. */
  private static updateListStructure(parentNode, prevList: any[], newList: any[]) {
    const prevKeys = new Set(prevList.map((item) => item.$_key));
    const newKeys = new Set(newList.map((item) => item.$_key));
    const maxListSize = newList.length > prevList.length ? newList.length : prevList.length;
    let elIndex = 0;

    for(let i = 0; i < maxListSize; i++) {
        const prevItem = prevList[i];
        const newItem = newList[i];
        if (!prevItem && !newItem) return; 
        if (prevItem?.$_key === newItem?.$_key) {
            if (this.isView(prevItem)) {
                newItem.$_ref = prevItem.$_ref;
                if (!this.isEqualProps(prevItem.$_props, newItem.$_props)) {
                    prevItem.$_ref?.updateProps.call(prevItem.$_ref, newItem.$_props);
                }
            }
            if (prevItem.children?.length || newItem.children?.length) {
                this.updateDomNode(
                    parentNode.children[elIndex],
                    prevItem,
                    newItem
                )
            }
            elIndex++;
        } else {
            if (prevItem?.$_key && newItem?.$_key) {
                /** Нет в новом списке. */
                if (!newKeys.has(prevItem.$_key)) {
                    parentNode.children[elIndex]?.remove();
                    prevList = prevList.filter((k) => k.$_key !== prevItem.$_key) // TODO optimize
                } else {
                    if (!prevKeys.has(newItem.$_key)) {
                        const fragment = document.createDocumentFragment();
                        this.mountChildren(fragment, [newItem]);
                        if (i === 0) {
                            parentNode.prepend(fragment)
                        }
                        else if (parentNode.children?.[elIndex - 1]) {
                            parentNode.children[elIndex - 1].after(fragment);
                        }
                    }
                    elIndex++;
                }
            }
            if (prevItem?.$_key && !newItem?.$_key) {
                if (!newKeys.has(prevItem.$_key)) {
                    parentNode.children[elIndex]?.remove();
                } else {
                    elIndex++;
                }
            }
            if (!prevItem?.$_key && newItem?.$_key) {
                if (!prevKeys.has(newItem.$_key)) {
                    const fragment = document.createDocumentFragment();
                    this.mountChildren(fragment, [newItem]);
                    if (i === 0) {
                        parentNode.prepend(fragment)
                    }
                    else if (parentNode.children?.[elIndex - 1]) {
                        parentNode.children[elIndex - 1].after(fragment);
                    }
                }
            }
        }
    }
    const currentMap = new Map();
    for (let i = 0; i < parentNode.children.length; i++) {
        currentMap.set(parentNode.children[i].getAttribute('key'), i);
    }
    Object.values(newList).forEach(({ $_key }, index) => {
        const nodeKey = parentNode.children[index]?.getAttribute('key');
        if (nodeKey && nodeKey !== $_key){
            parentNode.insertBefore(parentNode.children[index], parentNode.children[currentMap.get($_key)]);
            parentNode.insertBefore(parentNode.children[currentMap.get($_key)], parentNode.children[index]);
            let temp = currentMap.get($_key);
            currentMap.set(nodeKey, temp)
            currentMap.set($_key, index);
        }
    })
  }
  private static updateJSXAttrs(node, prev, next) {
    Object.keys(prev).forEach((key) => {
        if (!next.key) node.removeAttribute(key);
    })
    JSX.setElementAttributes(node, next)
  }

  static updateDomNode(parentNode: any, currentDOM: any, newDOM: any) {
    let corrector = 0;
    let textNodesCount = 0;

    if (!this.isEqualProps(currentDOM.props, newDOM.props)) {
        this.updateJSXAttrs(parentNode, currentDOM.props, newDOM.props);
    }

    const currentChilds = currentDOM.children;
    const newChilds = newDOM.children;

    currentChilds?.forEach((current, i) => {
        if (!current || !Object.keys(current)?.length) return;
        const currentIndex = i + corrector - textNodesCount;
        const newNode = newChilds[i];

        if (typeof current === 'string' || typeof current === 'number') {
            if (current !== newNode) {
                parentNode?.childNodes[i].replaceWith(
                    document.createTextNode(typeof current === 'number' ? newNode.toString() : newNode)
                )
            }
            textNodesCount++;
        }
        else if (this.isView(current)) {
            if (!this.isEqualProps(current.$_props, newNode.$_props)) {
                current.$_ref.updateProps.call(current.$_ref, newNode.$_props);
                newNode.$_ref = current.$_ref;
                return;
            }
        }
        else if (this.isJSX(current)) {
            if (!this.isEqualProps(current.props, newNode.props)) {
                this.updateJSXAttrs(parentNode.children[currentIndex], current.props, newNode.props);
            }
            if (current.children?.length || newNode.children?.length) {
                this.updateDomNode(parentNode.children[currentIndex], current, newNode)
            }
        }
        else if (this.isForin(current)) {
            this.updateListStructure(parentNode, current.$_items, newNode.$_items);
        }
        else if (this.isElseCondition(current)) {
            if (current.$_condition !== newNode.$_condition) {
                const currentEl = parentNode.children[currentIndex];
                const { $_node } = newNode;
                if ($_node.$_type === '_view') {
                    const component = new $_node.$_view($_node.props);
                    newNode.$_node.$ref = component;
                    currentEl.replaceWith(component.view)
                } else {
                    const fragment = document.createDocumentFragment();
                    this.mountChildren(fragment, [newNode.$_node]);
                    currentEl.replaceWith(fragment);
                }
            } else {
                if (!this.isEqualProps(current.props, newNode.props)) {
                    throw new Error('isEqualProps');
                }
                if (current.$_node.children?.length) {
                    if (!this.isEqualChildren(current.$_node.children, newNode.$_node.children)) {
                        this.updateChildren(
                            parentNode.children[i],
                            newNode.$_node.children
                        )
                        return;
                    }
                    this.updateDomNode(
                        parentNode.children[i],
                        currentChilds[i].$_node,
                        newChilds[i].$_node
                    )
                }
            }
        }
        else if (this.isCondition(current)) {
            if (!newNode.$_condition) corrector--;
            /** Если условие осталось прежним, проверить children */
            if (current.$_condition === newNode.$_condition) {
                if (!current.$_node) return;
                if (!this.isEqualProps(current.props, newNode.props)) {
                    throw new Error('isEqualProps');
                }
                if (current.$_node.children?.length) {
                    if (!this.isEqualChildren(current.$_node.children, newNode.$_node.children)) {
                        this.updateChildren(
                            parentNode.children[i],
                            newNode.$_node.children
                        )
                        return;
                    }
                    this.updateDomNode(
                        parentNode.children[i],
                        currentChilds[i].$_node,
                        newChilds[i].$_node
                    )
                }
            } else {
                if (newNode.$_condition) {
                    const fragment = document.createDocumentFragment();
                    this.mountChildren(fragment, [newNode.$_node]);
                    if (i === 0) {
                        parentNode.prepend(fragment);
                    } else if (parentNode.children?.[currentIndex - 1]) {
                        parentNode.children[currentIndex - 1].after(fragment)
                    }
                    return;
                }
                parentNode.children[currentIndex]?.remove();
            }
        }
    })
  }
  private static isEqualChildren(prev: any[], next: any[]): boolean {
      if (!prev || !next) return false;
      if (prev.length !== next.length) return false;
      return prev.every((p, index) => {
            if (typeof p === 'object') {
                if (
                    p.tag === next[index].tag &&
                    this.isEqualProps(p.props, next[index].props
                )) return true;
                return false;
            }
            return p === next[index];
      });
  }
  private static isEqualProps(prev: object, next: object): boolean {
        for (let key in prev){
            if (typeof prev[key] === 'function') continue;
            if (key === 'style') {
                if (this.isEqualProps(prev[key], next[key])) continue;
                else return false;
            }
            if (prev[key] !== next[key]) return false;
        }

        return true;
  }
  private static isJSX = (node: any) => !node?.$_type;
  private static isView = (node: any) => node?.$_type === '_view';
  private static isCondition = (node: any) => node?.$_type === '_if';
  private static isElseCondition = (node: any) => node?.$_type === '_ifelse';
  private static isForin = (node: any) => node?.$_type === '_forin';
}
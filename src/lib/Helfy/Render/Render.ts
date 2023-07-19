export class Render {
  private static _instance: Render;
  constructor() {
    if (Render._instance) {
        return Render._instance;
    }
    Render._instance = this;
  }
  static _view<T extends abstract new (...args: any) => any>(
    view: T,
    props: ConstructorParameters<typeof view>[0] extends undefined ? null : ConstructorParameters<typeof view>[0],
  ) {
    return { $_type: '_view', $_view: view, $_props: props, $_ref: null };
  }
  static _forin<T>(data: T[], callback: (value: T, index: number, array: T[]) => any) {
      const res = [];
      data.forEach((val, i, arr) => {
          res.push(callback(val, i, arr))
      })
      return { $_type: '_forin', $_data: data, $_items: res };
  }
  static _if(condition: boolean, jsx: any) {
      return { $_type: '_if', $_node: condition ? jsx : null, $_condition: condition };
  }
  static _ifelse(condition: boolean, jsx_if: any, jsx_else: any) {
      if (!jsx_if || !jsx_else) {
        throw new Error('Has no statements "if" or "else"');
      }
      return {
          $_type: '_ifelse',
          $_condition: condition,
          $_node: condition ? jsx_if : jsx_else,
      };
  }
}
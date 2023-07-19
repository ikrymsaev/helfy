import { TComponent } from "@lib/types";

export interface IViewParams<S extends object = {}, P extends object = {}> {
  initailState?: S;
  props?: P;
  children?: TComponent[];
}
export interface IComponentParams<P> extends Omit<IViewParams, 'initialState' | 'key'> {
  props?: P;
};
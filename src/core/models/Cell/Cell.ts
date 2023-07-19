import { TLandscape } from "./types";

export class Cell {
  constructor(
    readonly cell_id: number,
    readonly x: number,
    readonly y: number,
    readonly type: TLandscape
  ) {}
}
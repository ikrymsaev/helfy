import { Cell } from "../../models/Cell/Cell";
import { TLandscape } from "../../models/Cell/types";

class Field {
  private width: number;
  private heigth: number;
  cells: Array<Cell[]> = [];

  public generate(w: number, h: number): Array<Cell[]> {
    this.width = w;
    this.heigth = h;
    const result: Array<Cell[]> = [];
    const landscape = this.generateLandscape(this.heigth * this.width);
    let cell_id = 1;
    for (let i = 0; i < this.heigth; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < this.width; j++) {
        const type = landscape.pop();
        row.push(new Cell(cell_id, j, i, type ?? 'plain'))
        cell_id++;
      }
      result.push(row);
    }

    return result;
  }

  private shuffle<T>(arr: T[]): T[] {
    if (!arr.length) return [];

    const res = [...arr];
    let currentIndex = res.length;
    let randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [res[currentIndex], res[randomIndex]] = [
        res[randomIndex], res[currentIndex]];
    }
  
    return res;
  }

  private generateLandscape(count: number): TLandscape[] {
    const result: TLandscape[] = Array(count).fill('plain');

    const countOfJungle = Math.floor((count / 100) * 15);
    result.fill('jungle', 0, countOfJungle);
  
    const countOfMountains = Math.floor((count / 100) * 15);
    const mountainsEnd = countOfJungle + countOfMountains;
    result.fill('mountain', countOfJungle, mountainsEnd);
  
    const countOfLakes = Math.floor((count / 100) * 7);
    const LakesEnd = mountainsEnd + countOfLakes;
    result.fill('lake', mountainsEnd, LakesEnd);
  
    const countOfSwamps = Math.floor((count / 100) * 5);
    const swampsEnd = LakesEnd + countOfSwamps;
    result.fill('swamp', LakesEnd, swampsEnd);

    return this.shuffle<TLandscape>(result);
  }
}

export default Field;
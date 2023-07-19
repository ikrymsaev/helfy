import { $ } from "@lib/Helfy"
import Stores from "@store/StoreContext"
import { FieldCell } from "./components/FieldCell/FieldCell";
import { observe } from "@lib/decorators/Observe.decorator";
import { View } from "@lib/decorators/View.decorator";

import styles from './Cells.module.css';
import GameStore from "@store/GameStore";
import { state } from "@lib/decorators/State.decorator";
import { Cell } from "@core/models/Cell/Cell";

@View
export class Cells {
  @state x: number = 5;
  @state y: number = 8;
  @state higlight: number[] = [];

  @observe(Stores.gameStore, 'cells')
  private readonly cells: GameStore['cells'];

  private onClickCell(id: number) {
    const moveGraph = new MovingCellGraph(this.cells, { x: this.x, y: this.y }, 5);
    const movePath = moveGraph.getPathToCellId(id);
    console.log(movePath);
    this.higlight = movePath;
  }

  render() {

    return (
      <div>
        {$._forin(this.cells, (row, i) => (
          <div $_key={`row-${i}`} class={styles.row}>
            {$._forin(row, ({ cell_id, type, x, y }) => (
                $._view(FieldCell, {
                  id: cell_id,
                  type,
                  isActive: y === this.y && x === this.x,
                  isAvailable: this.higlight.includes(cell_id),
                  onClick: this.onClickCell.bind(this)
                })
            ))}
          </div>
        ))}
      </div>
    )
  }
}

class MovingCellGraph {
  cell: Cell;
  neighbours: MovingCellGraph[] = [];

  constructor(
    private readonly cells: GameStore['cells'],
    private readonly coord: { x: number, y: number },
    private readonly distance: number = 1,
  ) {
    /** Корневая клетка. */
    this.cell = this.cells[coord.y]?.[coord.x];
    this.setAvailableCells();
  }

  /** Вернуть кротчайший путь до ячейки. */
  public getPathToCellId(cell_id: Cell['cell_id']) {
    const path = this.bfs(this, cell_id);
    return path;
  }

  private bfs = (cellGraph: MovingCellGraph, targetId: Cell['cell_id']) => {
    const queue: Array<MovingCellGraph> = [cellGraph];
    const parents = {};
    const distances = {
      [cellGraph.cell.cell_id]: 0
    };
    const visited = new Set<Cell['cell_id']>();
 
    while (queue.length > 0) {
      const current = queue.shift();
      if (!current) continue;
      visited.add(current.cell.cell_id);

      for (const child of current.neighbours) {
        if (visited.has(child.cell.cell_id)) continue;
        if (!distances[child.cell.cell_id]) {
          distances[child.cell.cell_id] = distances[current.cell.cell_id] + 1;
          queue.push(child)
          parents[child.cell.cell_id] = current.cell.cell_id;
        }
      }
    }
    if (!visited.has(targetId)) {
      return [];
    }
    const path = [targetId];
    let parent = parents[targetId];
    while (!!parent) {
      path.push(parent);
      parent = parents[parent];
    }
    path.pop();
    path.reverse();

    return path;
 }

  /** Записать доступные соседние ячейки */
  private setAvailableCells() {
    if (this.distance > 0) {
      const { coord, cells, distance } = this;
      /** Все соседние клетки. */
      if (this.isAvailableCell(coord.y - 1, coord.x)) {
        this.neighbours.push(new MovingCellGraph(cells, { y: coord.y - 1, x: coord.x }, distance - 1));
      }
      if (this.isAvailableCell(coord.y + 1, coord.x)) {
        this.neighbours.push(new MovingCellGraph(cells, { y: coord.y + 1, x: coord.x}, distance - 1));
      }
      if (this.isAvailableCell(coord.y, coord.x - 1)) {
        this.neighbours.push(new MovingCellGraph(cells, { y: coord.y, x: coord.x - 1}, distance - 1));
      }
      if (this.isAvailableCell(coord.y, coord.x + 1)) {
        this.neighbours.push(new MovingCellGraph(cells, { y: coord.y, x: coord.x + 1}, distance - 1));
      }
      if (this.isAvailableCell(coord.y - 1, coord.x - 1)) {
        this.neighbours.push(new MovingCellGraph(cells, { y: coord.y - 1, x: coord.x - 1 }, distance - 1));
      }
      if (this.isAvailableCell(coord.y - 1, coord.x + 1)) {
        this.neighbours.push(new MovingCellGraph(cells, { y: coord.y - 1, x: coord.x + 1}, distance - 1));
      }
      if (this.isAvailableCell(coord.y + 1, coord.x - 1)) {
        this.neighbours.push(new MovingCellGraph(cells, { y: coord.y + 1, x: coord.x - 1}, distance - 1));
      }
      if (this.isAvailableCell(coord.y + 1, coord.x + 1)) {
        this.neighbours.push(new MovingCellGraph(cells, { y: coord.y + 1, x: coord.x + 1}, distance - 1));
      }
    }
  }
  private isAvailableCell(y: number, x: number) {
    const cell = this.cells[y]?.[x];
    return cell && cell.type !== 'lake';
  }
}
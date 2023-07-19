import { Cell } from "@core/models/Cell/Cell";
import { observable } from "@lib/decorators/Observable.decorator";
import { Store } from "@lib/decorators/Store.decorator";

@Store
class GameStore {
  @observable isStarted = false;
  @observable chipsCount: number;
  @observable cells: Array<Cell[]> = [];

  toggleStartGame() {
    this.isStarted = !this.isStarted;
  }
}

export default GameStore;
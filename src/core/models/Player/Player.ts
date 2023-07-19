import Army from "../Army/Army";
import Chip from "../Chip/Chip";

class Player {
  readonly id: number;
  army: Army;

  chips: Map<Chip['id'], Chip>;

  constructor(id: number, army: Army) {
    this.id = id;
    this.army = army;
  }
}

export default Player;
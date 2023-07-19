import Army from "@core/models/Army/Army";
import Chip from "@core/models/Chip/Chip";

class PlayerStore {
  army: Army;
  chips: Map<number, Chip>;
}

export default PlayerStore;
import { ICharacterCard } from "@settings/types";
import Squad from "../Squad/Squad";

class Chip {
  id: number;
  squad: Squad;
  activeCard: ICharacterCard;

  constructor(id: number, squad: Squad) {
    this.id = id;
    this.squad = squad;
  }
  move() {
  }
}

export default Chip;
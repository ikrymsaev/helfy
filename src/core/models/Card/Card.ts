import { TStats } from "@settings/types";

class Card {
  id: number;
  name: string;
  stats: TStats;

  constructor(id: number, name: string, stats: TStats) {
    this.id = id;
    this.name = name;
    this.stats = stats;
  }
}

export default Card;
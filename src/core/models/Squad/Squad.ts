import Card from "../Card/Card";

class Squad {
  id: number;
  name: string;
  cards: Card[]

  constructor(id: number, name: string, cards: Card[]) {
    this.id = id;
    this.name = name;
    this.cards = cards;
  }
}

export default Squad;
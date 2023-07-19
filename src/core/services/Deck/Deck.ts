import Army from "@core/models/Army/Army";
import Card from "@core/models/Card/Card";
import Squad from "@core/models/Squad/Squad";
import { IArmyMap, ICharMap, ISquadMap, TSquad } from "@settings/types";

/** Класс колоды карт. */
class Deck {
  readonly cards: Map<number, ICharMap>;
  readonly squads: Map<number, ISquadMap>;
  readonly armies: Map<number, IArmyMap>;

  private availableCards: Set<number>;
  private availableSquads: Set<number>;
  private availableArmies: Set<number>;

  constructor(
    cards: Map<number, ICharMap>,
    squads: Map<number, ISquadMap>,
    armies: Map<number, IArmyMap>,
  ) {
    this.cards = cards;
    this.availableCards = new Set(cards.keys());
    this.squads = squads;
    this.availableSquads = new Set(squads.keys());
    this.armies = armies;
    this.availableArmies = new Set(armies.keys());
  }

  public getOutRandomArmy(countSquads: number): Army {
    const armyId = this.getOutRandomArmyId();

    const armySquads = this.shuffle(this.armies.get(armyId)?.squad_ids);
    const randomSquadIds = armySquads.slice(0, countSquads);

    const randomSquads: Squad[] = [];
    randomSquadIds.forEach((id) => {
      const { name, character_ids } = this.squads.get(id);
      const cards = this.createCards(character_ids);
      randomSquads.push(new Squad(id, name, cards));
      this.availableSquads.delete(id);
    })
  
    const { name } = this.armies.get(armyId);
    
    return new Army(armyId, name, randomSquads);
  }
  private createCards(ids: number[]): Card[] {
    return ids.map((id) => {
      const { name, stats } = this.cards.get(id);
      this.availableCards.delete(id);

      return new Card(id, name, stats);
    });
  }
  
  private getOutRandomArmyId(): number {
    if (!this.availableArmies.size) {
      throw new Error('Has no available armies in deck');
    }
    const arr = [...this.availableArmies.values()];
    const random = Math.floor(Math.random() * this.availableArmies.size);
    const armyId = arr[random];
    this.availableArmies.delete(armyId);
    
    return armyId;
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
}

export default Deck;
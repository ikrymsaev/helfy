import Field from "../Field/Field";
import Deck from "../Deck/Deck";
import Settings from "../Settings";
import { ArmiesMap, CardsMap, SquadsMap } from "@settings/cards";
import Stores from "@store/StoreContext";
import PlayerStore from "@store/PlayerStore";
import { Store } from "@lib/store/Store";
import Chip from "@core/models/Chip/Chip";

/** Главный класс игры. */
class Game {
  private readonly settings: Settings;

  constructor(settings: Settings) {
    this.settings = settings;
  }

  /** Initialize game. */
  public init(): void {
    if (Stores.gameStore.isStarted) return;
  
    /** Set settings values. */
    Stores.gameStore.chipsCount = this.settings.chipsCount;
  
    /** Generate field. */
    const filedInstance = new Field();
    Stores.gameStore.cells =
      filedInstance.generate(this.settings.chipsCount * 3, this.settings.chipsCount * 2);
  
    /** Set players armies. */
    const deckInstance = new Deck(CardsMap, SquadsMap, ArmiesMap);
  
    Stores.player_1.army = deckInstance.getOutRandomArmy(this.settings.chipsCount);
    this.setChips(Stores.player_1);
    Stores.player_2.army = deckInstance.getOutRandomArmy(this.settings.chipsCount);
    this.setChips(Stores.player_2);
  
    /** Start game. */
    Stores.gameStore.isStarted = true;
  };
  public setChips(playerStore: PlayerStore) {
      playerStore.chips = new Map();
      const count = playerStore.army.squads.length;
      for (let i = 0; i < count; i++) {
        const chip = new Chip(i + 1, playerStore.army.squads[i]);
        playerStore.chips.set(i + 1, chip)
      }
  }
}

export default Game;
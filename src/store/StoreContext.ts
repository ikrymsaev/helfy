import GameStore from "./GameStore";
import PlayerStore from "./PlayerStore";

class Stores {
  /** Хранилище глобальных состояний игры. */
  static readonly gameStore = new GameStore();
  /** Состояние игрока №1 */
  static readonly player_1 = new PlayerStore();
  /** Состояние игрока №2 */
  static readonly player_2 = new PlayerStore();
}

export default Stores;
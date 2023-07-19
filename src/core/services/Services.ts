import Game from "./Game/Game";
import Settings from "./Settings";

class Services {
  static readonly gameService = new Game(new Settings(2, 6))
}

export default Services;
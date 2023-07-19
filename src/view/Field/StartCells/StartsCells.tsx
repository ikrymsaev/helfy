import { $ } from "@lib/Helfy";
import Stores from "@store/StoreContext";
import styles from './StartCells.module.css';
import PlayerStore from "@store/PlayerStore";
import { observe } from "@lib/decorators/Observe.decorator";
import GameStore from "@store/GameStore";
import { View } from "@lib/decorators/View.decorator";

interface IProps {
  revert?: boolean;
  playerStore: PlayerStore
}

@View
export class StartCells {
  constructor(private readonly props: IProps) {
    // this.subscribe([this.props.playerStore, 'chips'])
  }
  @observe(Stores.gameStore, 'chipsCount')
  private readonly chipsCount: GameStore['chipsCount']

  getCells() {
    const result = [];
    for (let i = 0; i < this.chipsCount; i++) {
      result.push(i + 1);
    }
    if (this.props?.revert) {
      return result.reverse();
    }
    return result;
  }

  render() {
    const playerChips = this.props.playerStore.chips;
    return (
      <div class={styles.container}>
        {$._forin(this.getCells(),
          (cell) => <div class={styles.cell}>
            {playerChips.get(cell).squad.name} {`(${playerChips.get(cell).squad.cards.length})`}
          </div>
        )}
      </div>
    )
  }
}
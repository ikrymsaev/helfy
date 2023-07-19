import { $ } from "@lib/Helfy";
import { Cells } from "./Cells/Cells";
import { StartCells } from "./StartCells/StartsCells";
import styles from './Field.module.css';
import Stores from "@store/StoreContext";
import { View } from "@lib/decorators/View.decorator";

@View
export class Field {
  render() {
    return (
      <div class={styles.wrapper}>
        {$._view(StartCells, { revert: true, playerStore: Stores.player_2 })}
        {$._view(Cells, null)}
        {$._view(StartCells, { playerStore: Stores.player_1 })}
      </div>
    )
  }
}
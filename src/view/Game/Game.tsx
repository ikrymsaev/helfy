import { $ } from "@lib/Helfy";
import styles from './Game.module.css';
import { Field } from "@view/Field/Field";
import { View } from "@lib/decorators/View.decorator";

@View
export class Game {
  render() {
    return (
      <div class={styles.game}>
        {$._view(Field, null)}
      </div>
    )
  }
}
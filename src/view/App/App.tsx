import { $ } from "@lib/Helfy";
import styles from "./App.module.scss";
import { Game } from "@view/Game/Game";
import { View } from "@lib/decorators/View.decorator";
import { CardCell } from "@view/CardCell/CardCell";

@View
/** Корневой компонент приложения. */
export class App {
    render() {
        return (
            <div class={styles.app}>
                {$._view(CardCell, null)}
                {$._view(Game, null)}
            </div>
        );
    }
}
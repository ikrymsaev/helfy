import { View } from '@lib/decorators/View.decorator';
import styles from './CardCell.module.css';

@View
export class CardCell {
  render() {
    return (
      <div class={styles.border}>
        <div class={styles.wrapper}>
          <div class={styles.image}></div>
          <div class={styles.description}>
            <p class={styles.about}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dicta ad aliquam
              illo nesciunt ducimus. Voluptates dolores ducimus facere distinctio veritatis nobis
              maxime adipisci? Deserunt modi debitis laborum itaque qui?
            </p>
            <div class={styles.description_skills}>
              <div class={styles.skills}>
                <div class={styles.melee}>
                  <div class={styles.skills_icon}>
                    <div class={styles.melee_icon}></div>
                  </div>
                </div>
                <p>+2</p>
              </div>
              <div class={styles.skills}>
                <div class={styles.shooting}>
                  <div class={styles.skills_icon}>
                    <div class={styles.shooting_icon}></div>
                  </div>
                </div>
                <p>2/3</p>
              </div>
              <div class={styles.skills}>
                <div class={styles.protection}>
                  <div class={styles.skills_icon}>
                    <div class={styles.protection_icon}></div>
                  </div>
                </div>
                <p>+1</p>
              </div>
              <div class={styles.skills}>
                <div class={styles.survivability}>
                  <div class={styles.skills_icon}>
                    <div class={styles.survivability_icon}></div>
                  </div>
                </div>
                <p>1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

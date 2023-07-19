import { TLandscape } from "@core/models/Cell/types";
import styles from './FieldCell.module.css';
import { View } from "@lib/decorators/View.decorator";
import { Cell } from "@core/models/Cell/Cell";

interface Props {
  id: Cell['cell_id'];
  type: TLandscape;
  isActive?: boolean;
  isAvailable?: boolean;
  onClick: (id: number) => void;
}
@View
export class FieldCell{
  constructor(private readonly props: Props) {}
  getCellClass() {
    if (this.props.type === 'jungle') return styles.cell_jungle;
    if (this.props.type === 'lake') return styles.cell_lake;
    if (this.props.type === 'mountain') return styles.cell_mountain;
    if (this.props.type === 'plain') return styles.cell_plain;
    if (this.props.type === 'swamp') return styles.cell_swamp;
    return null;
  }

  render() {
    return (
      <div
        onclick={() => this.props.onClick(this.props.id)}
        class={[
          styles.cell,
          this.getCellClass(),
          [styles.active, this.props.isActive],
          [styles.available, this.props.isAvailable]
        ]}
      >
        <span style={{ fontSize: '20px', fontWeight: '600' }}>
          {this.props.id}
        </span>
      </div>
    )
  }
}
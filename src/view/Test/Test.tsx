import Button from "@components/Button/Button";
import { $ } from "@lib/Helfy";
import { observe } from "@lib/decorators/Observe.decorator";
import { state } from "@lib/decorators/State.decorator";
import { View } from "@lib/decorators/View.decorator";
import GameStore from "@store/GameStore";
import Stores from "@store/StoreContext";

interface Props {
    title: string;
}

@View
export class Test {
  constructor(readonly props: Props) {}

  @state private count = 0;
  @state private elements: string[] = [];

  @observe(Stores.gameStore, 'isStarted')
  private isGameStarted: GameStore['isStarted'];
  

  private increment() {
      this.count++;
  }
  private decrement() {
      this.count--;
  }
  private add() {
      const prev = [...this.elements];
      prev.push(String(prev.length + 1))
      this.elements = prev;
  }
  private remove() {
      const prev = [...this.elements];
      const removed = prev.pop();
      if (removed) {
          this.elements = prev;
      }
  }
  private sort() {
      this.elements = [...this.elements].sort();
  }
  private delete(val: string) {
      const result = this.elements.filter((item) => item !== val)
      this.elements = result;
  }
  private setBefore(val: string) {
      const index = this.elements.findIndex((el) => el === val);
      const result = [...this.elements];
      result.splice(index, 0, `new-el-${result.length}`)
      this.elements = result;
  }

  render() {
    return (
      <div>
        <h1>{this.isGameStarted ? 'Started' : 'Not started'}</h1>
        {$._view(Button, { label: 'toggle start game', onClick: () => Stores.gameStore.toggleStartGame()})}
          <h1
            style={{ color: this.count > 0 ? 'red' : this.count < 0 ? 'blue' : 'green' }}
          >
            Counter 
            <span>{this.count.toString()}</span> 
            in title
          </h1>
          {$._view(Button, { label: 'Плюс', onClick: this.increment.bind(this)})}
          <div>
              <h2>Counter</h2>
              {$._view(Button, { label: '-', onClick: this.decrement.bind(this)})}
              <span>{this.count.toString()}</span>
              {$._view(Button, { label: '+', onClick: this.increment.bind(this)})}
          </div>
          <div>
              {$._if(this.count > -1,
                  <div style={{ minHeight: '200px', background: 'gray', color: "white" }}>
                      {$._forin(this.elements, (el) => (
                          <div $_key={el}>
                              {$._view(Button, { label: 'Set Before', onClick: () => this.setBefore.call(this, el)})}
                              <span>count: {this.count.toString()} </span>
                              <span>{el}</span>
                              {$._view(Button, { label: 'Delete', onClick: () => this.delete.call(this, el)})}
                          </div>
                      ))}
                      {$._view(Button, { label: 'Убавить', onClick: this.remove.bind(this)})}
                      {$._view(Button, { label: 'Отсортировать', onClick: this.sort.bind(this)})}
                      {$._view(Button, { label: 'Добавить', onClick: this.add.bind(this)})}
                  </div>
              )}
          </div>
          {$._ifelse(this.count < 5,
              <span>
                  less than 5: {this.count.toString()}
              </span>,
              <span>
                  more or equal 5: {this.count.toString()}
              </span>
          )}
          {$._if(this.count > 5,
              <div style={{ background: 'silver' }}>
                  <h2>Counter is bigger than Five</h2>
                  <div style={{ background: 'black', color: '#ffffff' }}>
                      {$._if(this.count > 10,
                          <div>Large counter {this.count.toString()}</div>
                      )}
                  </div>
              </div>
          )}
      </div>
    )
  }
}
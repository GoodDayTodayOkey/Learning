import * as React from 'react';
import { block } from 'bem-cn';
import { ParentContext } from 'Lessons/React/9.Context/Context';

import Children from 'Lessons/React/9.Context/Children';

const b = block('parent');

interface IState {
  title: string;
  counter: number;
  updateCounter(quantity: number): void;
}

class Parent extends React.PureComponent<{}, IState> {

  private updateCounter = (quantity: number) => {
    const { counter } = this.state;
    this.setState({ counter: counter + quantity });
  }

  public state: IState = {
    title: 'Количество:',
    counter: 0,
    updateCounter: this.updateCounter,
  };

  public render () {
    throw new Error('da');
    return (
      <div className={b()}>
        <ParentContext.Provider value={this.state}>
          <Children />
        </ParentContext.Provider>
      </div>
    );
  }
}

export default Parent;

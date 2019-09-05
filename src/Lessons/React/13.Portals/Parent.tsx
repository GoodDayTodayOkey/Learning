import * as React from 'react';
import { block } from 'bem-cn';
import Children from 'Lessons/React/13.Portals/Children';
import Modal from 'Lessons/React/13.Portals/Modal';

const b = block('parent');
interface IState{
  counter: number;
}

class Parent extends React.PureComponent<{}, IState> {

  public state: IState = { counter: 0 };
  public render () {
    const { counter } = this.state;
    return (
      <div className={b()} onClick={this.onClick}>
        Родительский Элемент
       <Modal>
         <Children counter={counter} onClick={this.onClick}/>
       </Modal>
      </div>
    );
  }

  public onClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }
}

export default Parent;

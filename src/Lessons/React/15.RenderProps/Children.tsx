import * as React from 'react';
import { block } from 'bem-cn';

interface IProps {
  counter: number;
  onClick: () => void;
}

const b = block('children');

class Children extends React.PureComponent<IProps> {
  public render() {
    const { counter, onClick } = this.props;
    return (
      <div className={b()}>
        Дочерний элемент {counter}
        <button style={{ display: 'block' }} onClick={onClick}>Увеличить счетчик</button>
      </div>
    );
  }
}

export default Children;

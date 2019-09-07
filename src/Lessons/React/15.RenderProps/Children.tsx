import * as React from 'react';
import { block } from 'bem-cn';

interface IProps {
  counter: number;
  onClick(): void;
}

const b = block('children');

class Children extends React.PureComponent<IProps> {
  public render () {
    const { counter, onClick } = this.props;
    return (
      <div className={b()} onClick={onClick}>
         Дочерний элемент {counter}
      </div>
    );
  }
}

export default Children;

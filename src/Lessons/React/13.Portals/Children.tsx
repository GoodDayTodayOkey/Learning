import * as React from 'react';
import { block } from 'bem-cn';

const b = block('children');
interface IProps {
  counter: number;
  onClick(): void;
}

class Children extends React.PureComponent<IProps> {
  public render () {
    const { counter, onClick } = this.props;
    return (
      <div className={b()}>
         Модальный элемент {counter}
      </div>
    );
  }
}

export default Children;

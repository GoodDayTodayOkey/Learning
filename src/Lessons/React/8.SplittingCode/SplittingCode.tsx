import * as React from 'react';
import { block } from 'bem-cn';

const b = block('splitting-code');

class SplittingCode extends React.PureComponent {
  public render() {
    return <div className={b()}>Этот код рендерится асинхронно</div>;
  }
}

export default SplittingCode;

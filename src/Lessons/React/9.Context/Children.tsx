import * as React from 'react';
import { block } from 'bem-cn';
import { ParentContext } from 'Lessons/React/9.Context/Context';

const b = block('children');

class Children extends React.PureComponent {
  public render () {
    return (
      <div className={b()}>
        <ParentContext.Consumer>
          {({ title, counter, updateCounter }) => (
            <div className={b('title')} >
              {title}<span className={b('quantity')}>&nbsp;{counter}</span>
              <div className={b('button')}>
                <button onClick={() => updateCounter(5)}>Увеличить на 5</button>
              </div>
            </div>
          )}
        </ParentContext.Consumer>
      </div>
    );
  }
}

export default Children;

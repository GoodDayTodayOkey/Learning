import * as React from 'react';
import { block } from 'bem-cn';

const b = block('components-and-props');

interface IState { checked: boolean; }

class StateAndLifecycle extends React.PureComponent<{}, IState> {

  public state = { checked: false };
  public render() {
    const { checked } = this.state;
    return (
      <>
        <div className={b('container')} >Вы подтвержадете что Вам больше 18 лет?</div>
        <input className={b('consent')} type="checkbox" checked={checked} />
        {checked ? 'Подтверждено' : 'Отклонено'}
        <div className={b('confirm')}>
          <button className={b('button')} type="button" onClick={this.onAcceptAge}>
            Подтверждаю
          </button>
        </div>
      </>
    );
  }

  public onAcceptAge = () => {
    const { checked } = this.state;
    this.setState((state, props) => ({ checked: !state.checked }));
  }

}

export default StateAndLifecycle;

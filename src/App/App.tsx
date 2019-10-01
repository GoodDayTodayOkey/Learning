import * as React from 'react';
import { block } from 'bem-cn';
import { connect } from 'react-redux';

import ErrorBoundary from '../Lessons/React/10.ErrorBoundary/ErrorBoundary';
import Parent from '../Lessons/React/15.RenderProps/Parent';
import Children from '../Lessons/React/15.RenderProps/Children';
import MainChildren from '../Lessons/React/17.SSR/MainChildren/MainChildren';
import ContactUs from '../Lessons/React/16.FinalForm/ContactUs';
import Name from '../Lessons/React/17.SSR/Name/Name';
import { IReduxStore } from '../Lessons/React/17.SSR/types';
import { changeName, incrementCounter } from '../Lessons/React/17.SSR/actions';
import * as selectors from '../Lessons/React/17.SSR/selectors';

const b = block('app');

type DispatchProps = ReturnType<typeof mapDispatch>;
type StateProps = ReturnType<typeof mapState>;

type Props = StateProps & DispatchProps;

class App extends React.PureComponent<Props> {
  public render() {
    const { name, mainCounter, onChangeName, onIncrementCounter } = this.props;
    return (
      <div className={b()}>
        <React.StrictMode>
          <ErrorBoundary>
            <div id={'menu'} >
              <Parent
                child={(counter, onClick) => <Children counter={counter} onClick={onClick} />}
                mainCounter={() => <MainChildren counter={mainCounter} onClick={onIncrementCounter} />}
              />
              <ContactUs />
              <Name name={name} onChangeName={onChangeName} />
            </div>
          </ErrorBoundary>
        </React.StrictMode>
      </div>
    );
  }
}

function mapState(store: IReduxStore) {
  return {
    name: selectors.selectName(store),
    mainCounter: selectors.selectCounter(store),
  };
}

const mapDispatch = (dispatch) => {
  return {
    onIncrementCounter: () => { dispatch(incrementCounter()) },
    onChangeName: (name: string) => { dispatch(changeName(name)) },
  }
};

export default connect<StateProps, DispatchProps, {}>(mapState, mapDispatch)(App);

import * as React from 'react';
import { block } from 'bem-cn';

const b = block('parent');

interface IProps {
  child(counter: number, onClick: () => void): JSX.Element;
  mainCounter(): JSX.Element;
}

interface IState {
  counter: number;
}

class Parent extends React.PureComponent<IProps, IState> {
  public state: IState = { counter: 0 };

  public render() {
    const { child, mainCounter } = this.props;
    const { counter } = this.state;
    return (
      <>
        {child(counter, this.onClick)}
        {mainCounter()}
      </>
    );
  }
  private onClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }
}

export default Parent;

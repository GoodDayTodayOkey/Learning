import * as React from 'react';
import { block } from 'bem-cn';

const b = block('parent');

interface IProps {
  render(counter: number, onClick: () => void): JSX.Element;
}

interface IState {
  counter: number;
}

class Parent extends React.PureComponent<IProps, IState> {
  public state: IState = { counter: 0 };

  public render () {
    const { render } = this.props;
    const { counter } = this.state;
    return (
      <>
        {render(counter, this.onClick)}
      </>
    );
  }
  private onClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }
}

export default Parent;

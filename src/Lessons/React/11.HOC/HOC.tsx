import * as React from 'react';

import { IRobotSize, IBoxSize } from './Box';
import { MAX_QUANTITY_ROBOT_IN_BOX } from './constants';

interface IWrapperComponentProps {
  robotSize: IRobotSize;
  boxSize: IBoxSize;
}

interface IState {
  counterRobots: number;
}

const HOC = <T extends IWrapperComponentProps>(WrapperComponent: React.ComponentType<T>) => {
  return class AddCounter extends React.PureComponent<T, IState> {
    public state: IState = { counterRobots: 0 };

    public componentDidUpdate() {
      const { counterRobots } = this.state;
      if (counterRobots > MAX_QUANTITY_ROBOT_IN_BOX) {
        throw new Error('Бокс переполнен');
      }
    }

    public render() {
      const { counterRobots } = this.state;
      return (
        <WrapperComponent
          {...this.props}
          counterRobots={counterRobots}
          onClick={this.handleButtonClick}
        />
      );
    }

    public handleButtonClick = () => {
      const { counterRobots } = this.state;
      this.setState({ counterRobots: counterRobots + 1 });
    }
  };
};

export default HOC;

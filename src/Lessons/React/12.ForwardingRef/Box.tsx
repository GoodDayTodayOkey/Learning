import * as React from 'react';
import { block } from 'bem-cn';
import HOC from './HOC';
import Robots from './Robots';
import { BOX_SQUARE } from './constants';

const b = block('box');
const RobotsFabric = HOC(Robots);

interface IState {
  square: number;
}

interface A {
  childrenMethod(): void;
}

class Box extends React.PureComponent<{}, IState> {
  public state: IState = { square: 0 };

  private robotsRef: React.RefObject<React.Component & A> = React.createRef();

  public componentDidMount() {
    this.robotsRef.current.childrenMethod();
  }

  public render() {
    const { square } = this.state;
    return (
      <div className={b()}>
        <div className={b('square')}>
          Свободная площадь: {BOX_SQUARE.width * BOX_SQUARE.height - square}
        </div>
        <RobotsFabric
          boxSize={BOX_SQUARE}
          addRobotsInBox={this.addRobotsInBox}
          ref={this.robotsRef}
        />
      </div>
    );
  }

  private addRobotsInBox = (robot: HTMLDivElement) => {
    const { square } = this.state;
    const dimensionsRobots = { width: robot.offsetWidth, height: robot.offsetHeight };
    const addedSquare = dimensionsRobots.height * dimensionsRobots.width;
    const currentSquare = square + addedSquare;
    if (currentSquare < BOX_SQUARE.width * BOX_SQUARE.height) {
      this.setState(({ square: currentSquare }));
    } else {
      throw Error('Бокс переполнен!');
    }
  }
}

export default Box;

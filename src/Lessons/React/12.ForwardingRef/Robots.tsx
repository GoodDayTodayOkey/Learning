import * as React from 'react';
import { block } from 'bem-cn';

const b = block('children');

export interface IBoxSize {
  width: number;
  height: number;
}

export interface IDimensionsRobots extends IBoxSize  {
  color: string;
}

interface IHocProps {
  robots: IDimensionsRobots[];
  onClick(): void;
}

export interface IProps extends Partial<IHocProps> {
  addRobotsInBox(robot: HTMLDivElement): void;
  boxSize: IBoxSize;
}

class Robots extends React.PureComponent<IProps> {
  public render () {
    const {
      onClick,
      boxSize: { width, height },
      robots,
      addRobotsInBox,
    } = this.props;

    return (
      <div className={b()}>
        {robots.map(robot =>
          <div
            className={b()}
            style={{
              width: robot.width,
              height: robot.height,
              backgroundColor: robot.color,
            }}
            ref={addRobotsInBox}
          />)}
        <div>Построено {robots.length} роботов.</div>
        <div>Ширина бокса для роботов: {width} </div>
        <div>Длина бокса для роботов: {height} </div>
        <button className={b('button')} onClick={onClick}>Создать робота</button>
      </div>
    );
  }

  public childrenMethod = () => {
    alert('Called children method');
  }
}

export default Robots;

import * as React from 'react';
import { block } from 'bem-cn';

const b = block('children');

export interface IRobotSize {
  widthRobot: number;
  heightRobot: number;
}

export interface IBoxSize {
  widthBox: number;
  heightBox: number;
}

interface IHocProps {
  counterRobots: number;
  onClick(): void;
}

interface IProps extends Partial<IHocProps> {
  robotSize: IRobotSize;
  boxSize: IBoxSize;
}

class Box extends React.PureComponent<IProps> {
  public render() {
    const {
      onClick,
      boxSize: { widthBox, heightBox },
      robotSize: { widthRobot, heightRobot },
      counterRobots,
    } = this.props;

    return (
      <div className={b()}>
        <div>Построено {counterRobots} роботов.</div>
        <div>Ширина бокса для роботов: {widthBox} </div>
        <div>Длина бокса для роботов: {heightBox} </div>
        <div>Ширина робота: {widthRobot} </div>
        <div>Длина робота: {heightRobot} </div>
        <button className={b('button')} onClick={onClick}>Создать робота</button>
      </div>
    );
  }
}

export default Box;
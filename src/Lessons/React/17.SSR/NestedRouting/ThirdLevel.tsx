import * as React from 'react';
import { block } from 'bem-cn';

interface IProps {
  level: string;
}

const b = block('first-level');

const ThirdLevel: React.FC<IProps> = (props) => {
  const { level } = props;
  return (
    <div className={b()}>
      Выбранный уровень: {level}
    </div>
  )
};

export default ThirdLevel;
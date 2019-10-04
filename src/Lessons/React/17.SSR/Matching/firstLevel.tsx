import * as React from 'react';
import { block } from 'bem-cn';

interface IProps {
  level: string;
}

const b = block('first-level');

const firstLevel: React.FC<IProps> = (props) => {
  const { level } = props;
  return (
    <div className={b()}>
      Выбранный уровень: {level}
    </div>
  )
};

export default firstLevel;
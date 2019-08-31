import * as React from 'react';
import { block } from 'bem-cn';

interface IProps {
  task: string;
}

const b = block('task');

const Task = (props: IProps) => {
  const { task } = props;
  return (
    <div className={b()}>
      <div className={b('title')}>{task}</div>
      <button type='submit' className={'submit'}>Выполнить</button>
      <button type='button' className={'reset'}>Отменить</button>
    </div>
  );
}

export default Task;

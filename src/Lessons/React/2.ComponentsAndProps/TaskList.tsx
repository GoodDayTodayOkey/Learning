import * as React from 'react';
import { block } from 'bem-cn';
import Task from './Task';

interface IProps {
  tasks: string[];
}

const b = block('task-list');

const TaskList = (props: IProps) => {
  const { tasks } = props;
  return (
    <div className={b()}>
      {tasks.map((task: string, index: number) => <Task task={task} />)}
    </div>);
};

export default TaskList;

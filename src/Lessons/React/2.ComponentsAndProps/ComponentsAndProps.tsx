import * as React from 'react';
import { block } from 'bem-cn';
import TaskList from './TaskList';

const b = block('components-and-props');

interface IProps {
  tool: string;
}

const ComponentsAndProps = (props: IProps) => {
  const { tool } = props;
  const tasks = ['go', 'sit', 'eat'];
  return (
    <div className={b()}>
      {tool}
      <TaskList tasks={tasks} />
    </div>);

}

export default ComponentsAndProps;

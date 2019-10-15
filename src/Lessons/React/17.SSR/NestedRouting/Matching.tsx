import * as React from 'react';
import { block } from 'bem-cn';
import { RouteComponentProps } from 'react-router-dom';
import FirstLevel from './FirstLevel';
import SecondLevel from './SecondLevel';
import ThirdLevel from './ThirdLevel';

type IProps = RouteComponentProps<{ type: string }>;
type ComponentType = 'first-level' | 'second-level' | 'third-level';
type IComponentProps = { level: string };


const b = block('matching');
const Matching: React.FC<IProps> = (props) => {

  const mapComponentType: Record<ComponentType, React.ComponentType<IComponentProps>> = {
    'first-level': FirstLevel,
    'second-level': SecondLevel,
    'third-level': ThirdLevel,
  };
  const { match: { params: { type } } } = props;
  const Component = mapComponentType[type];
  return (
    <div className={b()}>
      <Component level={type} />
    </div>
  );
};

export default Matching;
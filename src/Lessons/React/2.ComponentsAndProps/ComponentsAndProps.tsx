import * as React from 'react';

interface IProps {
  tool: string;
}

const ComponentsAndProps = (props: IProps) => {
  const { tool } = props;
  return <div>{tool}</div>;
}

export default ComponentsAndProps;

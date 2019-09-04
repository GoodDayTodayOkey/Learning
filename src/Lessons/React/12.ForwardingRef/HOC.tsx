import * as React from 'react';
import { IDimensionsRobots, IProps } from 'Lessons/React/12.ForwardingRef/Robots';

interface IState {
  robots: IDimensionsRobots[];
}

interface Ref {
  forwardedRef: React.RefObject<React.Component>;
}

const HOC = <T extends IProps >(WrapperComponent: React.ComponentType<T>) => {
  class AddedCounter extends React.PureComponent<T & Ref, IState>  {

    public state: IState = { robots: [] };

    public render() {
      const { robots } = this.state;
      const { forwardedRef, ...rest  } = this.props;
      const props = rest as T;
      return (
        <WrapperComponent
          {...props}
          robots={robots}
          onClick={this.handleButtonClick}
          ref={forwardedRef}
        />
      );
    }

    public handleButtonClick = () => {
      const { robots } = this.state;
      this.setState({ robots: [...robots,
        { width: Math.random() * 100,
          height: Math.random() * 100,
          color: `rgb( ${255 * Math.random() }, ${255 * Math.random() }, ${255 * Math.random() })`,
        }] });
    }
  }

  return React.forwardRef((props: T, ref: React.RefObject<React.Component>) => {
    return <AddedCounter {...props} forwardedRef={ref} />;
  });
};

export default HOC;

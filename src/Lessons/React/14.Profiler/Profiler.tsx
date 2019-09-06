import * as React from 'react';
import { render } from 'react-dom';
import profilerCb from './profilerCb';
import { unstable_trace as trace } from 'scheduler/tracing';

trace('initial render', performance.now(), () =>
  render(
    <React.unstable_Profiler id="Box" onRender={profilerCb}/>,
    document.getElementById('root'),
  ),
);

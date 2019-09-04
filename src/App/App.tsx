import * as React from 'react';
import { block } from 'bem-cn';
import ErrorBoundary from 'Lessons/React/10.ErrorBoundary/ErrorBoundary';
const Box  = React.lazy(() => import('Lessons/React/12.ForwardingRef/Box'));

const b = block('app');

class App extends React.PureComponent {
  public render() {
    return (<div className={b()}>
      <ErrorBoundary>
        <React.Suspense fallback={<>Загрузка...</>}>
          <Box/>
        </React.Suspense>
      </ErrorBoundary>
    </div>);
  }
}

export default App;

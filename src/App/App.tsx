import * as React from 'react';
import { block } from 'bem-cn';
import ErrorBoundary from 'Lessons/React/10.ErrorBoundary/ErrorBoundary';
const Parent  = React.lazy(() => import('Lessons/React/13.Portals/Parent'));

const b = block('app');

class App extends React.PureComponent {
  public render() {
    return (<div className={b()}>
      <ErrorBoundary>
        <React.Suspense fallback={<>Загрузка...</>}>
          <Parent />
        </React.Suspense>
      </ErrorBoundary>
      <div id={'popover'} />
    </div>);
  }
}

export default App;

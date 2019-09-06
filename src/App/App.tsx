import * as React from 'react';
import { block } from 'bem-cn';
import ErrorBoundary from 'Lessons/React/10.ErrorBoundary/ErrorBoundary';
const Parent  = React.lazy(() => import('Lessons/React/15.RenderProps/Parent'));
const Children  = React.lazy(() => import('Lessons/React/15.RenderProps/Children'));

const b = block('app');

class App extends React.PureComponent {
  public render() {
    return (<div className={b()}>
      <React.StrictMode>
        <ErrorBoundary>
          <React.Suspense fallback={<>Загрузка...</>}>
            <Parent
              render={(counter, onClick) => <Children counter={counter} onClick={onClick}/>}
            />
          </React.Suspense>
        </ErrorBoundary>
        <div id={'popover'} />
      </React.StrictMode>
    </div>);
  }
}

export default App;

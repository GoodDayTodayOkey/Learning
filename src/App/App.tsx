import * as React from 'react';
import { block } from 'bem-cn';
const SplittingCode = React.lazy(() => import('Lessons/React/8.SplittingCode/SplittingCode'));
const b = block('app');

class App extends React.PureComponent {
  public render() {
    return (<div className={b()}>
      <React.Suspense fallback={<>Hi</>}><SplittingCode /></React.Suspense>
    </div>);
  }
}

export default App;

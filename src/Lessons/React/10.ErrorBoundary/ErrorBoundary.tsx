import * as React from 'react';
import { block } from 'bem-cn';

const b = block('children');

interface IState {
  hasError: boolean;
  error: string;
}

function logErrorToMyService(logError, logErrorInfo) {
  console.log('logError', logError);
  console.log('logErrorInfo', logErrorInfo);
}

class ErrorBoundary extends React.PureComponent<{}, IState> {
  public state: IState = { hasError: false, error: '' };

  static getDerivedStateFromError(error) {
    console.log('error', error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    logErrorToMyService(error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h1 className={b()}>Произошла ошибка!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

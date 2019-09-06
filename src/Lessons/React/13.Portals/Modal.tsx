import * as React from 'react';
import * as ReactDom from 'react-dom';
import { block } from 'bem-cn';
const b = block('modal');

const popover: Element =  ReactDom.render(
  React.createElement('div', {
    className: b(),
  }),
  document.getElementById('popover'));

class Modal extends React.PureComponent {
  // private externalWindow = window.open('', '', 'width=600,height=400,left=200,top=200');

  public componentDidMount () {
    // this.externalWindow.document.body.appendChild(popover);
  }

  public render () {
    const { children } = this.props;
    return <div className={b()}> {ReactDom.createPortal(
      children,
      popover,
    )}</div>;
  }
}

export default Modal;

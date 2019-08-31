import * as React from 'react';
import { block } from 'bem-cn';

const b = block('handling-events');
const arrayLinks1 = [
  { link: 'https://www.google.ru', title: 'google' },
  { link: 'https://yandex.ru/', title: 'yandex' },
];

const arrayLinks2 = [
  { link: 'https://www.google.ru', title: 'google' },
  { link: 'https://yandex.ru/', title: 'yandex' },
];

class HandlingEvents extends React.PureComponent {

  public render() {
    return (
      <>
        {arrayLinks1.map((item, index) => {
          return (
            <a href={item.link} className={b('link')} type='button' onClick={(e) => this.handleButtonClick1(index, e)}>
              Отключенная ссылка на {``}
            </a>)
        })}

        {arrayLinks2.map((item, index) => {
          return (
            <a href={item.link} className={b('link')} type='button' onClick={this.handleButtonClick2.bind(this, index)}>
              Тоже отключенные сслыки ссылка на {``}
            </a>)
        })}
      </>
    )
  }

  public handleButtonClick1 = (index: number, e) => {
    e.preventDefault();
    alert(`Ссылка на ${arrayLinks1[index].title} отключена!`)
  }

  public handleButtonClick2(index: number, e) {
    e.preventDefault();
    alert(`Ссылка на ${arrayLinks1[index].title} отключена!`)
  }
}

export default HandlingEvents;

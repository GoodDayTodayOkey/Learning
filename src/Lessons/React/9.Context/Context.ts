import * as React from 'react';

export const ParentContext = React.createContext({
  title: 'Счетчик',
  counter: 0,
  updateCounter: (quantity: number) => {},
});

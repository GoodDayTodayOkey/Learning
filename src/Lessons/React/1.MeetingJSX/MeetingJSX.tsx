import * as React from 'react';
import { block } from 'bem-cn';

const b = block('meeting-jsx');

const MeetingJSX = () => {
  return React.createElement('div', { className: b() }, 'Привет, мир!');
};

export default MeetingJSX;

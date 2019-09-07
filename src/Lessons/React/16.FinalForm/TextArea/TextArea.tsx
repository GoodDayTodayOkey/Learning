import * as React from 'react';
import { block } from 'bem-cn';
import { FieldRenderProps } from 'react-final-form';
import './TextArea.scss';

const b = block('textArea');

interface IInjectedProps {
  rows: number;
  cols: number;
}

export type TextAreaProps = FieldRenderProps<string, HTMLElement> & IInjectedProps;

const TextArea: React.FC<TextAreaProps> = (props: TextAreaProps) => {
  const { cols, rows, input } = props;
  return <textarea {...input} cols={cols} rows={rows} className={b()} />;
};

export default TextArea;

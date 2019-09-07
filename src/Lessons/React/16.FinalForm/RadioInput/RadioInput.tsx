import * as React from 'react';
import { block } from 'bem-cn';
import { FieldRenderProps } from 'react-final-form';

const b = block('radioInput');

interface IInjectedProps {
  value: string;
}

export type RadioInputProps = FieldRenderProps<string, HTMLElement> & IInjectedProps;

const TextArea: React.FC<RadioInputProps> = (props: RadioInputProps) => {
  const { input } = props;
  return <input {...input} className={b()} />;
};

export default TextArea;

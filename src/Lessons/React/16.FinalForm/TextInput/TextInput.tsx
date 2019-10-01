import * as React from 'react';
import { block } from 'bem-cn';
import { FieldRenderProps } from 'react-final-form';

const b = block('textInput');

interface IInjectedProps {
  placeholder: string;
}

export type TextInputProps = FieldRenderProps<string, HTMLElement> & IInjectedProps;

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
  const { input, placeholder } = props;
  return <input {...input} placeholder={placeholder} className={b()} />;
};

export default TextInput;

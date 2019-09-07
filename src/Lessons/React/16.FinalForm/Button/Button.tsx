import * as React from 'react';
import { block } from 'bem-cn';
import { FormApi, AnyObject, formSubscriptionItems } from 'final-form';

const b = block('button');

interface IProps {
  type: 'button' | 'submit' | 'reset';
  text: string;
  disabled: boolean;
  form?: FormApi<AnyObject>;
}

const Button: React.FC<IProps> = (props: IProps) => {
  const { type, text, disabled, form } = props;
  return (
    <button className={b()} type={type} disabled={disabled} onClick={form && form.reset}>
      {text}
    </button>
  );
};

export default Button;

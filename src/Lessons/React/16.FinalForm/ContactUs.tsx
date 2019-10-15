import * as React from 'react';
import { block } from 'bem-cn';
import { Form, Field, FormSpy, FormSpyRenderProps } from 'react-final-form';
import { FORM_ERROR, AnyObject } from 'final-form';
import TextInput, { TextInputProps } from './TextInput/TextInput';
import TextArea, { TextAreaProps } from './TextArea/TextArea';
import RadioInput, { RadioInputProps } from './RadioInput/RadioInput';
import Button from './Button/Button';

const b = block('contact-us');
const required = value => (value ? undefined : 'Required');

class ContactUs extends React.PureComponent {
  public render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        validate={(values) => {
          const { name, sex, message } = values;
          return {
            name: !/[\w+]/.test(name) ? 'Присутсвуют недопустимые символы' : undefined,
            message: !/\w+/.test(message) ? 'Поле не заполенено' : undefined,
          };
        }}
      >
        {(props) => {
          const { handleSubmit, pristine, form, submitError } = props;
          return (
            <div className={b()}>
              <form onSubmit={handleSubmit}>
                <Field name="name" type="text" placeholder="Victor">
                  {(props: TextInputProps) => {
                    const { meta } = props;
                    return (
                      <div>
                        <TextInput {...props} />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>);
                  }}
                </Field>
                <div className={b('sex')}>
                  {['male', 'female'].map((text, i) => <label key={i}>{text}
                    <Field name="sex" type="radio" value={text} validate={required}>
                      {(props: RadioInputProps) => {
                        const { meta } = props;
                        return (
                          <>
                            <RadioInput {...props} />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                          </>);
                      }}
                    </Field>
                  </label>)}
                </div>
                <Field name="message" rows={5} cols={20} >
                  {(props: TextAreaProps) => {
                    const { meta } = props;
                    return (
                      <div>
                        <TextArea {...props} />
                        {meta.error && meta.touched && <span>{meta.error}</span>}
                      </div>);
                  }}
                </Field>
                <FormSpy
                  subscription={{ values: true }}
                >
                  {({ values }) => {
                    return (
                      <pre>
                        Текущие значения:
                      <div className={b('values')}>{JSON.stringify(values, null, 2)}</div>
                      </pre>
                    );
                  }}
                </FormSpy>
                <div className={b('button')}>
                  <Button type="submit" text="Оправить форму" disabled={pristine} />
                </div>
                <div className={b('button')}>
                  <Button type="reset" text="Очистить форму" form={form} disabled={pristine} />
                </div>
                {submitError && <div className={b('error')}>{submitError}</div>}
              </form>
            </div>
          );
        }}
      </Form>
    );
  }

  private onSubmit = async <
    FormValues,
    >(values: FormValues) => {
    await new Promise(resolve => setTimeout(resolve, 0))
      .then(() => console.log(JSON.stringify(values)));
    if (Object.keys(values).length !== 3) {
      return { [FORM_ERROR]: 'Какое то из полей не заполнено' };
    }
  }
}

export default ContactUs;

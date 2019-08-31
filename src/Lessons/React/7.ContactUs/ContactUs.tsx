import * as React from 'react';
import { block } from 'bem-cn';
import { Form, FormRenderProps } from 'react-final-form';

const b = block('contact-us');

class ContactUs extends React.PureComponent {
  public render() {
    return <div>...
    <Form onSubmit={this.handleSubmit} render={this.renderForm} />
    </div>;
  }
  private handleSubmit = (formFields) => {
    alert('Привет');
  }

  private renderForm = (props: FormRenderProps) => {
    const { handleSubmit } = props;
    return (
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ContactUs;

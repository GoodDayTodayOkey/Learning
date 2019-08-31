import * as React from 'react';
import { block } from 'bem-cn';

const b = block('conditional-rendering');
interface IProps {
  title: string;
  section: string;
  text: string | null;
}

export default function ConditionalRendering(props: Partial<IProps>) {
  const { title, section, text } = props;
  if (title) {
    return (
      <>
        {section
          ? <div className={b('section')}>{text && text}</div>
          : <>Секция не обнаружена</>
        }
      </>)
  } else {
    return null;
  }
}


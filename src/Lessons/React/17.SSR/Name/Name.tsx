import * as React from 'react';
import { block } from 'bem-cn';

const b = block('name');

interface IProps {
  name: string;
  onChangeName: (name: string) => void;
}



const Name: React.FC<IProps> = (props) => {
  const { name, onChangeName } = props;
  const [hasNotChangingName, setHasChangingName] = React.useState(false);
  const [updatedName, setUpdatedName] = React.useState('');
  const [colorButton, updateButtonColor] = React.useState('gray');
  React.useEffect(() => {
    updateButtonColor('green');
  }, [updatedName]);

  React.useEffect(() => {
    updateButtonColor('gray');
  }, [name]);

  React.useEffect(() => {
    if (!hasNotChangingName && updatedName !== '') {
      onChangeName(updatedName)
    }
  }, [hasNotChangingName]);

  const onClick = () => {
    setHasChangingName(!hasNotChangingName)
  }

  return (
    <div className={b()}>
      <div className={b('name')}>Привет, {name}</div>
      <input
        type="text"
        onChange={(e) => setUpdatedName(e.target.value)}
        value={updatedName}
        style={{
          display: hasNotChangingName ? 'inline' : 'none',
        }}
      />
      <button onClick={onClick} style={{
        backgroundColor: colorButton
      }}>
        Change name
      </button>
    </div>);
};

export default Name;

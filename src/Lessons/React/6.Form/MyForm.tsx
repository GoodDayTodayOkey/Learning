import * as React from 'react';
import { block } from 'bem-cn';

const b = block('form');

interface IState {
  login: string;
  password: string;
  info: string;
  sex: string;
}

class MyForm extends React.PureComponent<{}, IState> {
  public state: IState = { login: '', password: '', info: '', sex: 'female' };
  public render() {
    const { login, password, info, sex } = this.state;
    return <form onSubmit={(e) => {
      return this.handleButtonSubmit(e);
    }}>
      <label style={{ display: 'block' }}>Логин:
        <input type="text" value={login} onChange={(e) => {
          return this.handleLoginChange(e);
        }} />
      </label>
      <label style={{ display: 'block' }}>Пороль:
        <input type="password" value={password} onChange={(e) => {
          return this.handlePasswordChange(e);
        }} />
      </label>
      <label style={{ display: 'block' }}>Информация о себе:
        <textarea value={info} onChange={(e) => {
          return this.handleInfoChange(e);
        }} />
      </label>
      <label style={{ display: 'block' }}>Пол:
        <select value={sex} onChange={(e) => {
          return this.handleSelectChange(e);
        }} >
          <option value="famale">famale</option>
          <option value="male">male</option>
        </select>
      </label>
      <input type="submit" value="Send" />
    </form>;
  }

  private handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ login: e.target.value });
  }

  private handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  }

  private handleInfoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ info: e.target.value });
  }

  private handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ sex: e.target.value });
  }

  private handleButtonSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { login, password, info, sex } = this.state;
    alert(`login, ${login}, password, ${password}, 'info ${info}, sex ${sex}`);
  }

}
export default MyForm;

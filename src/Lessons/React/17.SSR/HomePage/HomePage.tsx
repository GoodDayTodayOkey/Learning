import * as React from 'react';
import { block } from 'bem-cn';
import { Switch, Route, Link } from "react-router-dom";
import Parent from '../../15.RenderProps/Parent';
import ContactUs from '../../16.FinalForm/ContactUs';
import Children from '../../15.RenderProps/Children';
import MainChildren from '../../17.SSR/MainChildren/MainChildren';
import Name from '../../17.SSR/Name/Name';
import Box from '../../12.ForwardingRef/Box';

interface IProps {
  name: string;
  mainCounter: number;
  onIncrementCounter(): void;
  onChangeName(name: string): void;
}

const b = block('home-page');
const HomePage: React.FC<IProps> = (props) => {
  const { name, mainCounter, onChangeName, onIncrementCounter } = props;
  return (
    <div className={b()}>
      <div className={b('greeting')}>
        Здесь представлена стартовая страница, пожалуйста выберите интересующий Вас раздел:
      </div>
      <div className={b('nav')}>
        <ul className={b('menu')}>
          <li className={b('menu-item')}>
            <Link to="/greeting">Greeting</Link>
          </li>
          <li className={b('menu-item')}>
            <Link className={b('link')} to="/contact-us">Contact Us</Link>
          </li>
          <li className={b('menu-item')}>
            <Link className={b('link')} to="/robots">Robots</Link>
          </li>
          <li className={b('menu-item')}>
            <Link className={b('link')} to="/counters">Counters</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/greeting">
          <Name name={name} onChangeName={onChangeName} />
        </Route>
        <Route path="/robots">
          <Box />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/counters">
          <Parent
            child={(counter, onClick) => <Children counter={counter} onClick={onClick} />}
            mainCounter={() => <MainChildren counter={mainCounter} onClick={onIncrementCounter} />}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default HomePage;

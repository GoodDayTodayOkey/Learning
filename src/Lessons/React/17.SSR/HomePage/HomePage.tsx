import * as React from 'react';
import { block } from 'bem-cn';
import { Switch, Route, Link } from "react-router-dom";
import loadable from '@loadable/component'
const Name = loadable(() => import('Lessons/React/17.SSR/Name/Name'));
const Box = loadable(() => import('Lessons/React/12.ForwardingRef/Box'));
const MainChildren = loadable(() => import('Lessons/React/17.SSR/MainChildren/MainChildren'));
const Children = loadable(() => import('Lessons/React/15.RenderProps/Children'));
const ContactUs = loadable(() => import('Lessons/React/16.FinalForm/ContactUs'));
const Parent = loadable(() => import('Lessons/React/15.RenderProps/Parent'));
const NestedRouting = loadable(() => import('Lessons/React/17.SSR/NestedRouting/NestedRouting'));

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
            <Link className={b('link')} to="/matching">Matching</Link>
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
        <Route path="/greeting" >
          <Name name={name} onChangeName={onChangeName} />
        </Route>
        <Route path="/robots" component={Box} />
        <Route path="/matching" component={NestedRouting} />
        <Route path="/contact-us" component={ContactUs}>
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

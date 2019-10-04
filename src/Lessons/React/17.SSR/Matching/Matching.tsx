import * as React from 'react';
import { block } from 'bem-cn';
import { Switch, Route, Link, withRouter, RouteComponentProps } from "react-router-dom";

type Props = RouteComponentProps;


const b = block('matching');
const NestedRouting: React.FC<Props> = (props) => {
  const { match, location, history } = props;
  return (
    <div className={b()}>
      Новый уровень вложенности роутинга:
      <ul className={b('nav')}>
        <li>
          <Link to={`${match.url}/first-level`}>Уровень 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/second-level`}>Уровень 2</Link>
        </li>
        <li>
          <Link to={`${match.url}/third-level`}>Уровень 3</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          {match.params.topicId}
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(NestedRouting);
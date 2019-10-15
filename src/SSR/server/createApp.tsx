import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as ReactDomServer from 'react-dom/server';
import * as cors from 'cors';
import * as serialize from 'serialize-javascript';
import * as express from 'express';
import * as qs from 'qs';
import { StaticRouter } from "react-router-dom";

import App from '../../App/App';
import { updateStore } from '../../Lessons/React/17.SSR/reducers';
import { number } from 'prop-types';
interface IServerReduxStore {
  data: {
    counter: number;
    name: string;
  }
}

const asyncGetParams = async (cb: (req, res, asyncApi) => void, req, res, ) => {
  const asyncApi: IServerReduxStore = await Promise.resolve({ "data": { "counter": 5, "name": "Mike" } });
  return cb(req, res, asyncApi);
}

const asyncHandleRender = (req, res, asyncApi) => {
  const store = createStore(updateStore, asyncApi);
  const context = {};
  const params = qs.parse(req.query);
  const preloadedState = store.getState();
  const html = ReactDomServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <Provider store={store}>
        <App />
      </Provider>
    </StaticRouter>
  );

  res.set('content-type', 'text/html');
  res.send(renderFullPage(html, preloadedState));
  res.end();
}

const app = express();
const handleRender = (req, res) => {
  asyncGetParams(asyncHandleRender, req, res);
};

const renderFullPage = (html, preloadedState) => {
  return `
  <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Webpack App</title>
      </head>
      <body>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
        </script>
        <div id="root">${html}</div>
        <script src='/main.bundle.js' defer ></script>
      </body>
    </html>
  `;
};

app.use(cors());
app.use(express.static('dist'));
app.get('*', handleRender);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

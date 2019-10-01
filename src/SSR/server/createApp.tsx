import * as React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as ReactDomServer from 'react-dom/server';
import * as cors from 'cors';
import * as serialize from 'serialize-javascript';
import * as express from 'express';

import App from '../../App/App';
import { updateStore } from '../../Lessons/React/17.SSR/reducers';

const app = express();
const handleRender = (req, res) => {
  const store = createStore(updateStore);

  const preloadedState = store.getState();
  const html = ReactDomServer.renderToString(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  res.set('content-type', 'text/html');
  res.send(renderFullPage(html, preloadedState));
  res.end();
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

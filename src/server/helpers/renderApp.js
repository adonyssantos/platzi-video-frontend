import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../../client/routes/serverRoutes.js';
import { initialState } from '../../../initialState.json';
import reducer from '../../client/reducers';
import setResponse from './setResponse';

const renderApp = (request, response) => {
  const store = createStore(reducer, initialState);
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={request.url} context={{}}>
        {renderRoutes(serverRoutes)}
      </StaticRouter>
    </Provider>,
  );

  response.send(setResponse(html));
};

export default renderApp;

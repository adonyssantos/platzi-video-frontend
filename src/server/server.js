import express from 'express';
import webpack from 'webpack';
import config from './config';
import { renderApp } from './helpers/index';
// import renderApp from './helpers/renderApp';

const app = express();

if (config.dev) {
  console.info('Development Mode');

  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../../webpack.config');
  const compiler = webpack(webpackConfig);
  const { publicPath } = webpackConfig.output;
  const serverConfig = {
    serverSideRender: true,
    publicPath,
  }; //   const serverConfig = { port: config.port, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (request, response) => {
  renderApp(request, response);
});

app.listen(config.port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(`Server running on ${config.url}:${config.port}`);
  }
});

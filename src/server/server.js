import express from 'express';
import config from './config';

const app = express();

app.get('*', (request, response) => {
  response.send({ name: 'Adonys' });
});

app.listen(config.port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info(`Server running on ${config.url}:${config.port}`);
  }
});

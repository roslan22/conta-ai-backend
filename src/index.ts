import { IN_PRODUCTION_MODE, PORT } from '@config';
import express from 'express';

const app = express();

app.get('/', (req, res) =>
  res.send(`Express Server in ${IN_PRODUCTION_MODE ? 'production mode' : 'development mode'}`),
);

if (IN_PRODUCTION_MODE) {
  app.listen();
} else {
  app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
  });
}

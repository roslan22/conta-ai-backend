import express from 'express';
import { PORT } from './config';

const app = express();

app.get('/', (req, res) => res.send('Express Server'));

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

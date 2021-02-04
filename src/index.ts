import { PORT } from '@config';
import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Express Server!'));

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

import { IN_PRODUCTION_MODE } from './server';

export const DB_CONNECTION_PARAMETERS = {
  host: IN_PRODUCTION_MODE ? 'localhost' : 'localhost',
  user: IN_PRODUCTION_MODE ? 'user' : 'root',
  password: IN_PRODUCTION_MODE ? 'password' : '',
  database: IN_PRODUCTION_MODE ? 'database' : 'database',
};

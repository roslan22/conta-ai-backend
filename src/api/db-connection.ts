import { DB_CONNECTION_PARAMETERS } from '@config';
import mysql from 'mysql';

export const dbConnection = mysql.createConnection({ ...DB_CONNECTION_PARAMETERS });

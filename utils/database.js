import { createConnection } from 'mysql2/promise';

const connection = await createConnection({
  host: 'mariadb106.server376071.nazwa.pl',
  port: 3306,
  user: 'server376071_systemmagnolia',
  password: 'RybnikOnline2023$',
  database: 'server376071_systemmagnolia',
});

export default connection;

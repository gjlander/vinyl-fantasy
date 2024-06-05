import { Pool } from 'pg';

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const dbPool = new Pool({
    host: PGHOST,
    database: PGDATABASE,
    user: PGUSER,
    password: PGPASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
    },
});

export default dbPool;

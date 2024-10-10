import pool from './database.js';
import './dotenv.js';

const createTableQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        date DATE NOT NULL,
        location VARCHAR(100) NOT NULL,
    )`;

try {
    const res = await pool.query(createTableQuery);
    console.log('Table created successfully');
} catch (error) {
    console.error(error.message);
}


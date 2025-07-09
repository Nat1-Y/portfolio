// db.js
const { Pool } = require('pg');
require('dotenv').config();

// Use DATABASE_URL from environment; throw error if not set to avoid hardcoding credentials
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    // Enforce DATABASE_URL in production environments
    if (process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL) {
        throw new Error('No DATABASE_URL environment variable is set. The application cannot start without this variable.');
    }
    // if (!process.env.DATABASE_URL) {
    //     throw new Error('No DATABASE_URL environment variable is set. The application cannot start without this variable.');
    // }
}

const pool = new Pool({
    connectionString,
});


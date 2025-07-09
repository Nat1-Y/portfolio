// // db.js
// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//     connectionString: process.env.DATABASE_URL || 'postgres://postgres:qawqaw@localhost:5432/portfolio_db'
// });

// module.exports = pool;

// db.js
const { Pool } = require('pg');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL || 'postgres://postgres:qawqaw@localhost:5432/portfolio_db';

if (!connectionString) {
    throw new Error('DATABASE_URL is not set and no fallback connection string is provided.');
}

const pool = new Pool({
    connectionString,
});

module.exports = pool;

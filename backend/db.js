const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'aphy',
    password: '1234',
    database: 'yama',
    host: 'localhost',
    port: '5432'
});

module.exports = pool;
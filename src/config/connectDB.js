const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '142.171.153.18',
    user: 'a7669371_65club',
    password: '729288@Tab$',
    database: 'a7669371_65club'
});

export default connection;

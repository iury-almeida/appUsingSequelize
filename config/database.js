const secret = require('./secret');

module.exports = {
    development: {
        username: 'mymoney',
        password: secret.DATABASE_SECRET,
        database: 'mymoney',
        host: '127.0.0.1',
        dialect: 'postgres'
    },
    homolog: {
        username: 'mymoney',
        password: secret.DATABASE_SECRET,
        database: 'mymoney',
        host: '127.0.0.1',
        dialect: 'postgres'
    },
    prod: {
        username: 'mymoney',
        password: secret.DATABASE_SECRET,
        database: 'mymoney',
        host: '127.0.0.1',
        dialect: 'postgres'
    },
}
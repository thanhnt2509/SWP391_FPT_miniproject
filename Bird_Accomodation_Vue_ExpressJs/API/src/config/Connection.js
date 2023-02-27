module.exports = {
    sql: require('mssql'), // export mssql module
    // dotenv and config will also be exported through this module, but most likely will not be used
    dotenv: require('dotenv').config({ path: require('path').resolve(__dirname, '..', '..', '.env') }),
    config: {
        server: process.env.SQL_SERVER,
        database: process.env.SQL_DB,
        user: process.env.SQL_USERNAME,
        password: process.env.SQL_PASSWORD,
        port: parseInt(process.env.SQL_PORT),
        options: {
            encrypt: false,
            trustServerCertificate: true
        }
    },
    //export connection
    connection: async () => {
        try {
            await module.exports.sql.connect(module.exports.config);
            module.exports.sql.on('error', err => { console.log(err.message); }); //handle error
            return module.exports.sql;
        }
        catch (err) {
            console.log(err.message)
        }
    }
}


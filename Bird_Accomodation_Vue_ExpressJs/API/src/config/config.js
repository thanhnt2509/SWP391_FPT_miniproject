module.exports = {
    sql: require('mssql'), // export mssql module
    // export dotenv and config
    dotenv: require('dotenv').config({ path: require('path').resolve(__dirname, '..', '..', '.env') }),
    database: {
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
            await module.exports.sql.connect(module.exports.database);
            module.exports.sql.on('error', err => { console.log(err.message); }); //handle error
            return module.exports.sql;
        }
        catch (err) {
            console.log(err.message)
        }
    },

    //date format yyyy-mm-dd
    dateFormat: (date) => {
        let formattedDate = new Date(date)
        return formattedDate.toISOString().slice(0, 10)
    },

    bookingStatus: {
        PENDING: 0,
        APPROVED: 1,
        ON_GOING: 2,
        COMPLETED: 3,
        CANCLED: 4,
    },

    role: {
        USER: 0,
        ADMIN: 1,
    },
    //jwt
    JWT_EXP_TIME: 60 * 60 * 60 * 60 * 60 * 60 * 60 * 60 * 60 * 60,
    JWT_SECRET: process.env.JWT_SECRET,

}


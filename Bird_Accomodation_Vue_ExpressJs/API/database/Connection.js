const sql = require('mssql')

const config = {
    server: 'localhost',
    database: 'BirdAccommodation',
    user: 'sa',
    password: '12345',
    port: 1433,
    trustServerCertificate: true
}

// if error occur when import mssql
sql.on('error', err => { console.log(err); })



/**
 * EX: 
 *  const con = connection()
 *  con.then(pool => {
 *      const query = 'select * from Accounts'
 *      return pool.request().query(query)
 * }).then(data => {
 *      return data.recordSet
 * })
 * 
 * 
 * @returns Promise object provide request and query data
 */
async function connection(){
    const con = await sql.connect(config)
    return con
}


module.exports = {connection}
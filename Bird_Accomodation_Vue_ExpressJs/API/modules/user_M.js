const {connection} = require('../database/Connection')

async function getAllCustomer(){
    let con = connection()
    const query = 'select * from Accounts'
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

// getAllCustomer()

module.exports = { getAllCustomer }
const {connection} = require('../database/Connection')

async function getAllCustomer(){
    let con = connection()
    const query = 'select * from Accounts'
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

async function updateCustomerStatus(userId, status){
    let con = connection()
    const query = `update Accounts set status = '${status}' where userId = '${userId}'`
    const data = con.then(pool => pool.request().query(query))
    console.log(await data);
    return (await data).recordset
}

async function deleteCustomer(id){
    let con = connection()
    const query = 'delete from Accounts where id = ?'
}

module.exports = { getAllCustomer, updateCustomerStatus, deleteCustomer }
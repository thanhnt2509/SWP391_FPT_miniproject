const {connection} = require('../database/Connection')

async function getAllCustomer(){
    let con = connection()
    const query = 'select * from Accounts'
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

async function getCustomerById(userId){
    let con = connection()
    const query = `select * from Accounts where userId = '${userId}'`
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

// async function updateCustomer(userId, userData){
//     let con = connection()
//     const query = `update Accounts set `${userData}` where userId = '${userId}'`
//     const data = con.then(pool => pool.request().query(query))
//     return (await data).recordset
// }

async function updateCustomerStatus(userId, status){
    let con = connection()
    const query = `update Accounts set status = '${status}' where userId = '${userId}'`
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

async function deleteCustomer(userId){
    let con = connection()
    const query = `delete from Accounts where userId = '${userId}'`
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}


module.exports = { 
    getAllCustomer, 
    //updateCustomer, 
    deleteCustomer, 
    updateCustomerStatus, 
    getCustomerById
}
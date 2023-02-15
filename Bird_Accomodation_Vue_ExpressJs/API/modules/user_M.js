const {connection} = require('../database/Connection')

async function getAllUser(){
    let con = connection()
    const query = 'select * from [User]'
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

async function getUserById(userId){
    let con = connection()
    const query = `select * from [User] where user_id = '${userId}'`
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

// async function updateUser(userId, bodyData){
//     let con = connection()
//     let query = `update User set `
//     if(bodyData.username != null){
//         query += `username = '${bodyData.username}', `
//     }
//     if(bodyData.password != null){
//         query += `password = '${bodyData.password}', `
//     }
//     if(bodyData.email != null){
//         query += `email = '${bodyData.email}', `
//     }
//     if(bodyData.status != null){
//         query += `status = '${bodyData.status}', `
//     }
//     //remove the last comma and space in the query string
//     query = query.slice(0, -2)
//     //add where clause
//     query += ` where userId = '${userId}'`
//     const data = con.then(pool => pool.request().query(query))
//     return (await data).recordset
// }
async function updateUserStatus(userId, status){
    let con = connection()
    const query = `update [User] set status = '${status}' where user_id = '${userId}'`
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

// async function addUser(bodyData){
//     let con = connection()
//     const query = `insert into User(username, email, password, status) 
//                 values('${bodyData.username}', '${bodyData.email}', '${bodyData.password}', '${bodyData.status}')`
//     const data = con.then(pool => pool.request().query(query))
//     return (await data).recordset
// }

async function getAllServices(){
    let con = connection()
    const query = 'select * from Services'
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

async function getAllBills(){
    let con = connection()
    const query = 'select * from Bills'
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

async function getAllBookings(){
    let con = connection()
    const query = 'select * from Bookings'
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

async function getBookingDetail(bookingId){
    let con = connection()
    const query = `select * from Bookings where booking_id = '${bookingId}'`
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

async function getReviewByUserId(userId){
    let con = connection()
    const query = `select * from Reviews where user_id = '${userId}'`
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

async function getDailyReport(birdId, bookingId){
    let con = connection()
    const query = ``
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

async function getDailyFeedback(reportId){
    let con = connection()
    const query = ``
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

async function makeBooking(bodyData){
    let con = connection()
    const query = `insert into Bookings(user_id, date_from, date_to, total_price, status)
                values('${bodyData.user_id}', '${bodyData.date_from}', '${bodyData.date_to}', '${bodyData.total_price}', '1')`
    const data = con.then(pool => pool.request().query(query))
    return (await data).recordset
}

//check if username is already in the database, return true if it is
async function checkUserName(username){
    let con = connection()
    const query = `select * from [User] where name = '${username}'`
    const data = con.then(pool => pool.request().query(query))
    (await data).recordset.length > 0 ? true : false
}


module.exports = { 
    getAllUser,
    getUserById,
    updateUserStatus,
    // addUser,
    // updateUser,
    getAllServices,
    getAllBills,
    getAllBookings,
    getBookingDetail,
    getReviewByUserId,
    getDailyReport,
    getDailyFeedback,
    makeBooking,
    checkUserName

    
}
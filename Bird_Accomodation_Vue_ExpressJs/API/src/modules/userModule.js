const { connection } = require("../../database/Connection");

// function 1
async function addUser(bodyData) {
  //bodyData include role, name, password, address, phone, email, status, user_img, token
  let con = await connection();
  let query = `insert into [User] (role, name, password, address, phone, email, status, user_img, token) 
                values ('${bodyData.role}', 
                '${bodyData.name}', 
                '${bodyData.password}', 
                '${bodyData.address}', 
                '${bodyData.phone}', 
                '${bodyData.email}', 
                '${bodyData.status}', 
                '${bodyData.user_img}', 
                '${bodyData.token}')`;
  return con.query(query);
}

async function updateUser(user_id, bodyData) {
  //bodyData include name, password, address, phone, email, user_img
  let con = await connection();
  let query = `update [User] set name = '${bodyData.name}',
                password = '${bodyData.password}',
                address = '${bodyData.address}',
                phone = '${bodyData.phone}',
                email = '${bodyData.email}',
                user_img = '${bodyData.user_img}'
                WHERE user_id = ${user_id}`;
  return con.query(query, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
    } else {
      console.log("User name updated successfully.");
    }
  });
}
updateUser(2, { name: "USER_CORE" });

async function deleteUser(user_id) {
  let con = await connection();
  let query = `update FROM [User] set status = 'ban' WHERE user_id = '${user_id}'`;
  return con.query(query);
}

async function getUserById(user_id) {
  let con = await connection();
  let query = `SELECT * FROM [User] WHERE user_id = '${user_id}'`;
  return con.query(query);
}

async function getUserByName(Name) {
  let con = await connection();
  let query = `SELECT * FROM [User] WHERE Name = '${Name}'`;
  return con.query(query);
}

async function getAllUsers() {
  let con = await connection();
  let query = `SELECT * FROM [User]`;
  return con.query(query);
}

// function 2
async function addBird(bodyData) {
  //bodyData include user_id, bird_name, species, breed, age, gender, description
  let con = await connection();
  let query = `insert into Birds(user_id, bird_name, species, breed, age, gender, description)
                values ('${bodyData.user_id}', '${bodyData.bird_name}', '${bodyData.species}', '${bodyData.breed}', '${bodyData.age}', '${bodyData.gender}', '${bodyData.description}')`;
  return con.query(query);
}

async function updateBird(bird_id, bodyData) {
  //bodyData include bird_name, age, descritpion
  let con = await connection();
  let query = `UPDATE Birds SET bird_name = '${bodyData.bird_name}',
                age = '${bodyData.age}',
                description = '${bodyData.description}'
                WHERE bird_id = '${bird_id}'`;
  return con.query(query);
}

async function deleteBird(bird_id) {
  let con = await connection();
  let query = `DELETE FROM Birds WHERE bird_id = '${bird_id}'`;
  return con.query(query);
}

async function getBirdById(bird_id) {
  let con = await connection();
  let query = `SELECT * FROM Birds WHERE bird_id = '${bird_id}'`;
  return con.query(query);
}

async function getBirdByName(bird_name) {
  let con = await connection();
  let query = `SELECT * FROM Birds WHERE bird_name = '${bird_name}'`;
  return con.query(query);
}

async function getAllBirds() {
  let con = await connection();
  let query = `SELECT * FROM Birds`;
  return con.query(query);
}
///////////////////////////////////////////////////////////////////////////
// getAllBirdOfUser id
async function getAllBirdOfUser(id) {
  let con = await connection();
  let query = `SELECT * FROM Birds where user_id = '${id}'`;
  return con.query(query);
}

async function getAllBirdType() {
  let con = await connection();
  let query = `select * from BirdType`;
  return con.query(query);
}

async function updateUserName(user_id, bodyData) {
  //bodyData include name, password, address, phone, email, user_img
  let con = await connection();
  let query = `update [User] SET name = '${bodyData.name}' 
                WHERE user_id = ${user_id}`;
  return con.query(query);
}
///////////////////////////////////////////////////////////////////////////
//function 3
async function addService(bodyData) {
  //bodyData include name, description, price, status (1: active, 0: inactive)
  let con = await connection();
  let query = `INSERT INTO Services (name, description, price, status) VALUES ('${bodyData.name}', '${bodyData.description}', '${bodyData.price}', '${bodyData.status}')`;
  return con.query(query);
}

async function updateService(service_id, bodyData) {
  //bodyData include name, description, price, status (1: active, 0: inactive)
  let con = await connection();
  let query = `UPDATE Services SET name = '${bodyData.name}', 
                description = '${bodyData.description}', 
                price = '${bodyData.price}', 
                status = '${bodyData.status}' 
                WHERE service_id = '${service_id}'`;
  return con.query(query);
}

async function deleteService(service_id) {
  let con = await connection();
  let query = `DELETE FROM Services WHERE service_id = '${service_id}'`;
  return con.query(query);
}

async function getServiceById(service_id) {
  let con = await connection();
  let query = `SELECT * FROM Services WHERE service_id = '${service_id}'`;
  return con.query(query);
}

async function getServiceByName(name) {
  let con = await connection();
  let query = `SELECT * FROM Services WHERE name = '${name}'`;
  return con.query(query);
}

async function getAllServices() {
  let con = await connection();
  let query = `SELECT * FROM Services`;
  return con.query(query);
}

//function 4
async function addBooking(user_id, bodyData) {
  //bodyData include date_from, date_to, total_price, status
  let con = await connection();
  let query = `INSERT INTO Bookings (user_id, date_from, date_to, total_price, status) 
                VALUES ('${user_id}', '${bodyData.date_from}', '${bodyData.date_to}', '${bodyData.total_price}', '${bodyData.status}')`;
  return con.query(query);
}

async function updateBooking(booking_id, bodyData) {
  //bodyData include date_to, total_price, status
  let con = await connection();
  let query = `UPDATE Bookings SET date_to = '${bodyData.date_to}', 
                total_price = '${bodyData.total_price}', 
                status = '${bodyData.status}'
                WHERE booking_id = '${booking_id}'`;
  return con.query(query);
}

async function cancelBooking(booking_id) {
  //status 1: pending, 2: approved, 3: cancelled
  let con = await connection();
  let query = `UPDATE Bookings SET status = 3 WHERE booking_id = '${booking_id}'`;
  return con.query(query);
}

async function getBookingById(booking_id) {
  let con = await connection();
  let query = `SELECT * FROM Bookings WHERE booking_id = '${booking_id}'`;
  return con.query(query);
}

async function getAllBookings() {
  let con = await connection();
  let query = `SELECT * FROM Bookings`;
  return con.query(query);
}

// function 5
async function addBookingDetail(booking_id, bodyData) {
  //bodyData include bird_id, service_id
  let con = await connection();
  let query = `insert into BookingDetail (booking_id, bird_id, service_id) 
                values ('${booking_id}', '${bodyData.bird_id}', '${bodyData.service_id}')`;
  return con.query(query);
}

async function updateBookingDetail(bdetail_id, bodyData) {
  //bodyData include bird_id, service_id
  let con = await connection();
  let query = `update BookingDetail set bird_id = '${bodyData.bird_id}', 
                service_id = '${bodyData.service_id}' where bdetail_id = '${bdetail_id}'`;
  return con.query(query);
}

async function deleteBookingDetail(bdetail_id) {
  let con = connection();
  let query = `DELETE FROM BookingDetail WHERE bdetail_id = '${bdetail_id}'`;
  return con.query(query);
}

async function getBookingDetailById(bdetail_id) {
  let con = await connection();
  let query = `SELECT * FROM BookingDetail WHERE bdetail_id = '${bdetail_id}'`;
  const data = con.then((pool) => pool.request().query(query));
  return con.query(query);
}

async function getAllBookingDetails() {
  let con = await connection();
  let query = `SELECT * FROM BookingDetail`;
  const data = con.then((pool) => pool.request().query(query));
  return con.query(query);
}

// function 6
async function addDailyReport(booking_id, bodyData) {
  //bodyData include bird_id, bird_img, date
  let con = await connection();
  let query = `insert into DailyReport (booking_id, bird_id, bird_image, date) 
                values ('${booking_id}', '${bodyData.bird_id}', '${bodyData.bird_img}', '${bodyData.date}')`;
  return con.query(query);
}

async function updateDailyReport(dreport_id, bodyData) {
  //bodyData include bird_img
  let con = await connection();
  let query = `update DailyReport set bird_image = '${bodyData.bird_img}' where dreport_id = '${dreport_id}'`;
  return con.query(query);
}

async function deleteDailyReport(dreport_id) {
  let con = await connection();
  let query = `DELETE FROM DailyReport WHERE dreport_id = '${dreport_id}'`;
  return con.query(query);
}

async function getDailyReportById(dreport_id) {
  let con = await connection();
  let query = `SELECT * FROM DailyReport WHERE dreport_id = '${dreport_id}'`;
  return con.query(query);
}

async function getAllDailyReports() {
  let con = await connection();
  let query = `SELECT * FROM DailyReport`;
  return con.query(query);
}

// function 7
async function addDailyFeedback(dreport_id, bodyData) {
  //bodyData include title, content
  let con = await connection();
  let query = `insert into DailyFeedback (title, content) 
                values ('${bodyData.title}', '${bodyData.content}') where dreport_id = '${dreport_id}'`;
  return con.query(query);
}

async function updateDailyFeedback(bodyData) {
  let con = await connection();
  let query = `update DailyFeedback set title = '${bodyData.title}', 
                content = '${bodyData.content}' where dfeedback_id = '${dfeedback_id}'`;
  return con.query(query);
}

async function deleteDailyFeedback() {
  let con = await connection();
  let query = `DELETE FROM DailyFeedback WHERE dfeedback_id = '${dfeedback_id}'`;
  return con.query(query);
}

async function getDailyFeedbackById() {
  let con = await connection();
  let query = `SELECT * FROM DailyFeedback WHERE dfeedback_id = '${dfeedback_id}'`;
  return con.query(query);
}

async function getAllDailyFeedbacks() {
  let con = await connection();
  let query = `SELECT * FROM DailyFeedback`;
  return con.query(query);
}

// function 8
async function addBill(booking_id, bodyData) {
  //bodyData include total amount, date, payment method, payment status
  let con = await connection();
  let query = `INSERT INTO Bills (booking_id, total_amount, status, method, date) 
            VALUES ('${booking_id}', 
                    '${bodyData.total_amount}', 
                    '${bodyData.status}', 
                    '${bodyData.method}', 
                    '${bodyData.date}')`;
  return con.query(query);
}

async function updateBill(bill_id, bodyData) {
  //bodyData include total amount, date, payment method, payment status
  let con = await connection();
  let query = `UPDATE Bills SET 
            total_amount = '${bodyData.total_amount}', 
            status = '${bodyData.status}', 
            method = '${bodyData.method}',
            date = '${bodyData.date}' 
            WHERE bill_id = '${bill_id}'`;
  return con.query(query);
}

async function deleteBill(bill_id) {
  let con = await connection();
  let query = `DELETE FROM Bills WHERE bill_id = '${bill_id}'`;
  return con.query(query);
}

async function getBillById(bill_id) {
  let con = await connection();
  let query = `SELECT * FROM Bills WHERE bill_id = '${bill_id}'`;
  return con.query(query);
}

async function getAllBills() {
  let con = await connection();
  let query = `SELECT * FROM Bills`;
  return con.query(query);
}

// function 9
async function getAvgMonthIncome() {
  let con = await connection();
  let query = `SELECT MONTH(date) as month, AVG(total_amount) as avg_income 
                FROM Bills GROUP BY MONTH(date)`;
  return con.query(query);
}

async function addNews(dreport_id, bodyData) {}

async function updateNews(dfeedback_id, bodyData) {}

async function getNewsById(dfeedback_id) {}

async function deleteNews(dfeedback_id) {}

module.exports = {
  // F1
  addUser,
  updateUser,
  deleteUser,
  getUserById,
  getUserByName,
  getAllUsers,updateUserName,
  // F2
  addBird,
  updateBird,
  deleteBird,
  getBirdById,
  getBirdByName,
  getAllBirds,
  getAllBirdOfUser,
  getAllBirdType,
  // F3
  addService,
  updateService,
  deleteService,
  getServiceById,
  getServiceByName,
  getAllServices,
  // F4
  addBooking,
  updateBooking,
  cancelBooking,
  getBookingById,
  getAllBookings,
  // F5
  addBookingDetail,
  updateBookingDetail,
  deleteBookingDetail,
  getBookingDetailById,
  getAllBookingDetails,
  // F6
  addDailyReport,
  updateDailyReport,
  deleteDailyReport,
  getDailyReportById,
  getAllDailyReports,
  // F7
  addDailyFeedback,
  updateDailyFeedback,
  deleteDailyFeedback,
  getDailyFeedbackById,
  getAllDailyFeedbacks,
  // F8
  addBill,
  updateBill,
  deleteBill,
  getBillById,
  getAllBills,
  // F9, need double-check
  getAvgMonthIncome,
  addNews,
  updateNews,
  getNewsById,
  deleteNews,
};

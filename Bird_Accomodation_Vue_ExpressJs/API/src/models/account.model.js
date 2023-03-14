const db = require("../utils/dbConnect");
const config = require("../config/config");

module.exports = {
    register: async (body) => {
        return await db('User').insert({
            email: body.email,
            password: body.password,
            name: body.name,
            address: body.address,
            phone: body.phone,
            role: config.role.USER,
            status: config.userStatus.ACTIVE,
            user_img: null
        });
    },
    login: async (body) => {
        const returnData = await db('User')
            .whereRaw('email = ? collate latin1_general_cs_as \n' +
                'and password = ? collate latin1_general_cs_as', [body.email, body.password])
            .first();
        return returnData || null;
    },
    validateEmail: async (email) => {
        const returnData = await db('User')
            .whereRaw('email = ? collate latin1_general_cs_as', [email])
            .first();
        return returnData || null;
    },
    validatePhone: async (phone) => {
        const returnData = await db('User')
            .where({
                phone: phone
            })
            .first();
        return returnData || null;
    },
    getAccountByID: async (user_id) => {
        const returnData = await db('User')
            .where({
                user_id: user_id
            })
            .first();
        return returnData || null;
    },
    getSearchAccount: async (body) => {
        const { name, email, phone } = body;
        const returnData = await db('User')
            .select('user_id', 'email', 'name', 'address', 'phone', 'role', 'status', 'user_img', 'token')
            .whereRaw('COALESCE(name, \'\') LIKE ?', `%${name || ''}%`)
            .whereRaw('COALESCE(email, \'\') LIKE ?', `%${email || ''}%`)
            .whereRaw('COALESCE(phone, \'\') LIKE ?', `%${phone || ''}%`);
        return returnData || null;
    },
    changeAccountStatus: async (user_id, newStatus) => {
        return await db('User')
            .where({
                user_id: user_id
            })
            .update({
                status: newStatus
            });
    },
    validateRole: async (email) => {
        const returnData = await db('User')
            .select('role')
            .where({
                email: email
            })
            .first();
        return returnData.role;
    },
    getAllAccount: async () => {
        const returnData = await db('User')
            .select(
                'user_id',
                'email',
                'name',
                'address',
                'phone',
                'role',
                'status',
                'user_img',
                'token'
            );
        return returnData || null;
    },
    updateUserName: async (user_id, name) => {
        return await db('User')
            .where({
                user_id: user_id
            })
            .update({
                name: name
            });
    },
    getUserId: async (email) => {
        const returnData = await db('User')
            .select('user_id')
            .where({
                email: email
            })
            .first();
        return returnData.user_id;
    },
}
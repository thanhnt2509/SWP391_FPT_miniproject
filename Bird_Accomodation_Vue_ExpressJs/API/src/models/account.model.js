const config = require("../../src/config/config");

module.exports = {
    register: async (body) => {
        let con = await config.knexConnection();
        return await con('User').insert({
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
        let con = await config.knexConnection();
        const returnData = await con('User')
            .whereRaw('email = ? collate latin1_general_cs_as \n' +
                'and password = ? collate latin1_general_cs_as', [body.email, body.password])
            .first();
        return returnData || null;
    },
    validateEmail: async (email) => {
        let con = await config.knexConnection();
        const returnData = await con('User')
            .whereRaw('email = ? collate latin1_general_cs_as', [email])
            .first();
        return returnData || null;
    },
    validatePhone: async (phone) => {
        let con = await config.knexConnection();
        const returnData = await con('User')
            .where({
                phone: phone
            })
            .first();
        return returnData || null;
    },
    getAccountByID: async (user_id) => {
        let con = await config.knexConnection();
        const returnData = await con('User')
            .where({
                user_id: user_id
            })
            .first();
        return returnData || null;
    },
    getSearchAccount: async (body) => {
        const con = await config.knexConnection();
        const { name, email, phone } = body;
        const returnData = await con('User')
            .select('user_id', 'email', 'name', 'address', 'phone', 'role', 'status', 'user_img', 'token')
            .whereRaw('COALESCE(name, \'\') LIKE ?', `%${name || ''}%`)
            .whereRaw('COALESCE(email, \'\') LIKE ?', `%${email || ''}%`)
            .whereRaw('COALESCE(phone, \'\') LIKE ?', `%${phone || ''}%`);
        return returnData || null;
    },
    changeAccountStatus: async (user_id, newStatus) => {
        let con = await config.knexConnection();
        return await con('User')
            .where({
                user_id: user_id
            })
            .update({
                status: newStatus
            });
    },
    validateRole: async (email) => {
        let con = await config.knexConnection();
        const returnData = await con('User')
            .select('role')
            .where({
                email: email
            })
            .first();
        return returnData.role;
    },
    getAllAccount: async () => {
        let con = await config.knexConnection();
        const returnData = await con('User')
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
        let con = await config.knexConnection();
        return await con('User')
            .where({
                user_id: user_id
            })
            .update({
                name: name
            });
    },
    getUserId: async (email) => {
        let con = await config.knexConnection();
        const returnData = await con('User')
            .select('user_id')
            .where({
                email: email
            })
            .first();
        return returnData.user_id;
    },
}
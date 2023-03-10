const config = require("../config/config");

module.exports = {
    getAllRegistedBird: async (email) => {
        let con = await config.knexConnection();
        const { user_id } = await con("User")
            .select({ user_id: "user_id"})
            .where({ email: email })
            .first();
        const result = await con.select("b.*", "bt.name as type_name")
            .from("Bird as b")
            .join("BirdType as bt", "b.type_id", "bt.btype_id")
            .where({ user_id: user_id });
        return result || null;
    },
    deleteBirdById: async (bird_id) => {
        let con = await config.knexConnection();
        const result = await con("Bird")
            .where({ bird_id: bird_id })
            .del();
        return result || null;
    },
    getBirdById: async (bird_id) => {
        let con = await config.knexConnection();
        const result = await con.select("b.*", "bt.name as type_name")
            .from("Bird as b")
            .join("BirdType as bt", "b.type_id", "bt.btype_id")
            .where({ bird_id: bird_id })
            .first();
        return result || null;
    },
    registerNewBird: async (data) => {
        let con = await config.knexConnection();
        const result = await con("Bird")
            .insert({
                user_id: data.user_id,
                type_id: data.type_id,
                bird_name: data.bird_name,
                age: data.age,
                gender: data.gender,
                breed: data.breed,
                description: data.description,
                image: data.image
            })
            .returning("bird_id");
        return result || null;
    },
    getBirdTypeId: async (bird_type) => {
        let con = await config.knexConnection();
        const { btype_id } = await con("BirdType")
            .select({ btype_id: "btype_id" })
            .where({ name: bird_type })
            .first();
        return btype_id || null;
    },
    getAllBirdType: async () => {
        let con = await config.knexConnection();
        const result = await con("BirdType");
        return result || null;
    },
    updateBirdById: async (data) => {
        let con = await config.knexConnection();
        const result = await con("Bird")
            .where({ bird_id: data.bird_id })
            .update({
                type_id: data.type_id,
                bird_name: data.bird_name,
                age: data.age,
                gender: data.gender,
                breed: data.breed,
                description: data.description,
                image: data.image
            })
        return result || null;
    },
}
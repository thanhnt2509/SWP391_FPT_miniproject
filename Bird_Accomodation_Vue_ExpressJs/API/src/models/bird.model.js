const db = require("../utils/dbConnect");

module.exports = {
    getAllRegistedBird: async (email) => {
        const { user_id } = await db("User")
            .select({ user_id: "user_id"})
            .where({ email: email })
            .first();
        const result = await db.select("b.*", "bt.name as type_name")
            .from("Bird as b")
            .join("BirdType as bt", "b.type_id", "bt.btype_id")
            .where({ user_id: user_id })
            .select(
                db.raw("CASE WHEN EXISTS \n" +
                "(SELECT * FROM Booking WHERE bird_id = b.bird_id) \n" +
                "THEN CAST(1 AS BIT) ELSE CAST(0 AS BIT) END AS boarding")
            );
        return result || null;
    },
    deleteBirdById: async (bird_id) => {
        const result = await db("Bird")
            .where({ bird_id: bird_id })
            .del();
        return result || null;
    },
    getBirdById: async (bird_id) => {
        const result = await db.select("b.*", "bt.name as type_name")
            .from("Bird as b")
            .join("BirdType as bt", "b.type_id", "bt.btype_id")
            .where({ bird_id: bird_id })
            .first();
        return result || null;
    },
    registerNewBird: async (data) => {
        const result = await db("Bird")
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
        const { btype_id } = await db("BirdType")
            .select({ btype_id: "btype_id" })
            .where({ name: bird_type })
            .first();
        return btype_id || null;
    },
    getAllBirdType: async () => {
        const result = await db("BirdType");
        return result || null;
    },
    updateBirdById: async (data) => {
        const result = await db("Bird")
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
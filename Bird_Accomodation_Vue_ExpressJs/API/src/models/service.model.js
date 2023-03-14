const db = require("../utils/dbConnect");
const config = require("../config/config");

module.exports = {
    getAllServices: async () => {
        const result = await db("Service")
            .where({ status: config.serviceStatus.AVAILABLE })
        return result || null;
    },
    getServiceByName: async (name) => {
        const result = await db("Service")
            .where("name", "like", "%" + name + "%")
            .andWhere({ status: config.serviceStatus.AVAILABLE })
        return result || null;
    },
    getAllServicesHighLight: async () => {
        const result = await db("Service")
            .where({
                status: config.serviceStatus.AVAILABLE,
                isHightLight: 1
            })
        return result || null;
    },
    getServiceById: async (service_id) => {
        const result = await db("Service")
            .where({ 
                service_id: service_id,
                // status: config.serviceStatus.AVAILABLE 
            })
            .first();
        return result || null;
    },
    addService: async (body) => {
        const result = await db("Service")
            .insert({
                name: body.name,
                description: body.description,
                status: config.serviceStatus.AVAILABLE,
                price: body.price
            })
            .returning("service_id");
        return result || null;
    },
    updateServiceByName: async (data) => {
        const result = await db("Service")
            .where({ name: data.service_name })
            .update({
                name: data.name,
                description: data.description,
                price: data.price
            })
            .returning(["service_id", "name", "description", "price", "image", "status"]);
        return result || null;
    },
    updateServiceById: async (data) => {
        const result = await db("Service")
            .where({ service_id: data.service_id })
            .update({
                name: data.name,
                description: data.description,
                price: data.price
            })
            .returning(["service_id", "name", "description", "price", "image", "status"]);
        return result || null;
    },
    deleteServiceByName: async (name) => {
        const result = await db("Service")
            .where({ name: name })
            .update({
                status: config.serviceStatus.UNAVAILABLE
            })
            .returning(["service_id", "name", "description", "price", "image", "status"]);
        return result || null;
    },
    deleteServiceById: async (service_id) => {
        const result = await db("Service")
            .where({ service_id: service_id })
            .update({
                status: config.serviceStatus.UNAVAILABLE
            })
            .returning(["service_id", "name", "description", "price", "image", "status"]);
        return result || null;
    },
    validateServiceName: async (name) => {
        const result = await db("Service")
            .where({ name: name })
            .first();
        return result || null;
    },
}
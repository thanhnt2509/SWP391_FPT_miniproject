const config = require("../config/config");

module.exports = {
    getAllServices: async () => {
        let con = await config.knexConnection();
        const result = await con("Service")
            .where({ status: config.serviceStatus.AVAILABLE })
        return result || null;
    },
    getServiceByName: async (name) => {
        let con = await config.knexConnection();
        const result = await con("Service")
            .where("name", "like", "%" + name + "%")
            .andWhere({ status: config.serviceStatus.AVAILABLE })
        return result || null;
    },
    getAllServicesHighLight: async () => {
        let con = await config.knexConnection();
        const result = await con("Service")
            .where({
                status: config.serviceStatus.AVAILABLE,
                isHightLight: 1
            })
        return result || null;
    },
    getServiceById: async (service_id) => {
        let con = await config.knexConnection();
        const result = await con("Service")
            .where({ 
                service_id: service_id,
                // status: config.serviceStatus.AVAILABLE 
            })
            .first();
        return result || null;
    },
    addService: async (body) => {
        let con = await config.knexConnection();
        const result = await con("Service")
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
        let con = await config.knexConnection();
        const result = await con("Service")
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
        let con = await config.knexConnection();
        const result = await con("Service")
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
        let con = await config.knexConnection();
        const result = await con("Service")
            .where({ name: name })
            .update({
                status: config.serviceStatus.UNAVAILABLE
            })
            .returning(["service_id", "name", "description", "price", "image", "status"]);
        return result || null;
    },
    deleteServiceById: async (service_id) => {
        let con = await config.knexConnection();
        const result = await con("Service")
            .where({ service_id: service_id })
            .update({
                status: config.serviceStatus.UNAVAILABLE
            })
            .returning(["service_id", "name", "description", "price", "image", "status"]);
        return result || null;
    },
    validateServiceName: async (name) => {
        let con = await config.knexConnection();
        const result = await con("Service")
            .where({ name: name })
            .first();
        return result || null;
    },
}
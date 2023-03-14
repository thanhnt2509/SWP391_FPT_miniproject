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
            .where({
                name: name,
                status: config.serviceStatus.AVAILABLE
            })
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
            .where({ name: data.name })
            .update({
                description: data.description,
                price: data.price
            })
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
        return result || null;
    },
    deleteServiceByName: async (name) => {
        let con = await config.knexConnection();
        const result = await con("Service")
            .where({ name: name })
            .update({
                status: config.serviceStatus.UNAVAILABLE
            })
        return result || null;
    },
    deleteServiceById: async (service_id) => {
        let con = await config.knexConnection();
        const result = await con("Service")
            .where({ service_id: service_id })
            .update({
                status: config.serviceStatus.UNAVAILABLE
            })
        return result || null;
    }
}
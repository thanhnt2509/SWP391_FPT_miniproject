const servicesModel = require('../models/service.model');

module.exports = {
    getAllServices: async (req, res, next) => {
        try {
            const result = await servicesModel.getAllServices();
            const serviceList = result.map(item => ({
                service_id: item.service_id,
                name: item.name,
                description: item.description,
                status: item.status,
                price: item.price,
                image: item.image
            }))
            res.status(200).send({
                exitcode: 0,
                message: "Get service list successfully",
                services: serviceList
            })
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    getServiceByName: async (req, res, next) => {
        try {
            const { service_name } = req.params;
            const result = await servicesModel.getServiceByName(service_name);
            if (result === null || result.length === 0) {
                res.status(200).send({
                    exitcode: 101,
                    message: "Service not found"
                })
            } else {
                const serviceList = result.map(item => ({
                    service_id: item.service_id,
                    name: item.name,
                    description: item.description,
                    status: item.status,
                    price: item.price,
                    image: item.image
                }))
                res.status(200).send({
                    exitcode: 0,
                    message: "Get service successfully",
                    service: serviceList
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    getServiceById: async (req, res, next) => {
        try {
            const { service_id } = req.params;
            const result = await servicesModel.getServiceById(service_id);
            if (result === null) {
                res.status(200).send({
                    exitcode: 101,
                    message: "Service not found"
                })
            } else {
                const serviceList = {
                    service_id: result.service_id,
                    name: result.name,
                    description: result.description,
                    status: result.status,
                    price: result.price,
                    image: result.image
                }
                res.status(200).send({
                    exitcode: 0,
                    message: "Get service successfully",
                    service: serviceList
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    addService: async (req, res, next) => {
        try {
            const { name, description, price } = req.body;
            const serviceDetail = {
                name: name,
                description: description,
                price: price
            }
            // Check if service name already exists
            const checkService = await servicesModel.validateServiceName(name);
            if (checkService !== null) {
                res.status(400).send({
                    exitcode: 101,
                    message: "Service name already exists"
                })
                return;
            }
            const result = await servicesModel.addService(serviceDetail);
            if (result !== null) {
                res.status(200).send({
                    exitcode: 0,
                    service_id: result[0].service_id,
                    message: "Add service successfully"
                })
            } else {
                res.status(400).send({
                    exitcode: 101,
                    message: "Add service failed"
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    updateServiceByName: async (req, res, next) => {
        try {
            const { service_name } = req.params;
            const { name, description, price } = req.body;
            const updateDetail = {
                service_name: service_name,
                name: name,
                description: description,
                price: price
            }
            const result = await servicesModel.updateServiceByName(updateDetail);
            if (result !== null && result.length > 0) {
                res.status(200).send({
                    exitcode: 0,
                    message: "Update service successfully",
                    service: result
                })
            } else {
                res.status(400).send({
                    exitcode: 101,
                    message: "No service found"
                })
            }
        } catch (error) {
            next(error);
        }
    },
    updateServiceById: async (req, res, next) => {
        try {
            const { service_id } = req.params;
            const { name, description, price } = req.body;
            const updateDetail = {
                service_id: service_id,
                name: name,
                description: description,
                price: price
            }
            const result = await servicesModel.updateServiceById(updateDetail);
            if (result !== null && result.length > 0) {
                res.status(200).send({
                    exitcode: 0,
                    message: "Update service successfully",
                    service: result
                })
            } else {
                res.status(400).send({
                    exitcode: 101,
                    message: "No service found"
                })
            }
        } catch (error) {
            next(error);
        }
    },
    deleteServiceByName: async (req, res, next) => {
        try {
            const { service_name } = req.params;
            const result = await servicesModel.deleteServiceByName(service_name);
            if (result !== null && result.length > 0) {
                res.status(200).send({
                    exitcode: 0,
                    message: "Delete service successfully",
                    service: result
                })
            } else {
                res.status(400).send({
                    exitcode: 101,
                    message: "Delete service failed, service not found"
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    //sussy
    // deleteServiceByName: async (req, res, next) => {
    //     try {
    //         const { name } = req.params;
    //         const result = await servicesModel.deleteServiceByName(name);
    //         if (result > 0){
    //             res.status(200).send({
    //                 exitcode: 0,
    //                 message: "Delete service successfully"
    //             })
    //         } else {
    //             res.status(200).send({
    //                 exitcode: 101,
    //                 message: "Delete service failed"
    //             })
    //         }
    //     } catch (error) {
    //       console.log(error.message);
    //        res.status(500).send("Internal server error");
    //     }
    // },
    deleteServiceById: async (req, res, next) => {
        try {
            const { service_id } = req.params;
            const result = await servicesModel.deleteServiceById(service_id);
            console.log(result);
            if (result !== null && result.length > 0) {
                res.status(200).send({
                    exitcode: 0,
                    message: "Delete service successfully",
                    service: result
                })
            } else {
                res.status(400).send({
                    exitcode: 101,
                    message: "Delete service failed, service not found"
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
}
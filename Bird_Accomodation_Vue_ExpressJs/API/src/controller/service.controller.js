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
                image: item.image,
                isHighlight: item.isHighlight,
                isPack: item.isPack,
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
    getAllHighLightServices: async (req, res, next) => {
        try {
            const result = await servicesModel.getAllServiceHightLights();
            const serviceList = result.map(item => ({
                service_id: item.service_id,
                name: item.name,
                description: item.description,
                status: item.status,
                price: item.price,
                image: item.image,
                isHighlight: item.isHighlight,
                isPack: item.isPack,
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
    //sussy
    getServiceByName: async (req, res, next) => {
        try {
            const { name } = req.params;
            const result = await servicesModel.getServiceByName(name);
            const serviceList = result.map(item => ({
                service_id: item.service_id,
                name: item.name,
                description: item.description,
                price: item.price
            }))
            if (result.length === 0) {
                res.status(200).send({
                    exitcode: 101,
                    message: "Service not found"
                })
            } else {
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
            const serviceList = result.map(item => ({
                service_id: item.service_id,
                name: item.name,
                description: item.description,
                status: item.status,
                price: item.price
            }))
            if (result.length === 0) {
                res.status(200).send({
                    exitcode: 101,
                    message: "Service not found"
                })
            } else {
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
    //update this to not add duplicate sv name
    addService: async (req, res, next) => {
        try {
            const { name, description, price } = req.body;
            const serviceDetail = {
                name: name,
                description: description,
                price: price
            }
            const result = await servicesModel.addService(serviceDetail);
            if (result > 0){
                res.status(200).send({
                    exitcode: 0,
                    message: "Add service successfully"
                })
            } else {
                res.status(200).send({
                    exitcode: 101,
                    message: "Add service failed"
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    updateServiceById: async (req, res, next) => {
        try {
            const {service_id} = req.params;
            const image = req.file
            // console.log(`request body`);
            // console.log(req.body);
            // console.log(image.path);
            const { name, price, isHighlight, isPack, description } = req.body
            const result = await servicesModel.updateServiceById(service_id, req.body, image.filename);
            const serviceDetail = await servicesModel.getServiceById(service_id);
            if (result > 0){
                res.status(200).send({
                    exitcode: 0,
                    message: "Update service successfully",
                    service: serviceDetail
                })
            } else {
                res.status(400).send({
                    exitcode: 101,
                    message: "Update service failed"
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    deleteServiceById: async (req, res, next) => {
        try {
            const { service_id } = req.params;
            const result = await servicesModel.deleteServiceById(service_id);
            const serviceDetail = await servicesModel.getServiceById(service_id);
            if (result > 0){
                res.status(200).send({
                    exitcode: 0,
                    message: "Delete service successfully",
                    service: serviceDetail
                })
            } else {
                res.status(200).send({
                    exitcode: 101,
                    message: "Delete service failed"
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
}
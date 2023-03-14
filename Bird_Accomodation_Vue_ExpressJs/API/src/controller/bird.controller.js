const birdModel = require('../models/bird.model');

module.exports = {
    getAllRegistedBird: async (req, res, next) => {
        try {
            const email = req.payload.email;
            const result = await birdModel.getAllRegistedBird(email);
            if (result === null) {
                res.status(404).send({
                    exitcode: 101,
                    message: "No bird found"
                })
            } else {
                const birdList = result.map(item => ({
                    bird_id: item.bird_id,
                    type_name: item.type_name,
                    age: item.age,
                    bird_name: item.bird_name,
                    breed: item.breed,
                    gender: item.gender,
                    image: item.image,
                    description: item.description,
                    boarding: item.boarding
                }))
                res.status(200).send({
                    exitcode: 0,
                    message: "Get bird list successfully",
                    birds: birdList
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    registerNewBird: async (req, res, next) => {
        try {
            // const email = req.payload.email;
            const { user_id, bird_name, bird_type, age, gender, breed, description } = req.body;
            // const img = req.file.path;
            // console.log('body')
            // console.log(req.body);
            // console.log('file')
            // console.log(req.file)
            const filename = req.file.filename;
            const birdDetail = {
                user_id: userId,
                type_id: birdTypeId,
                bird_name: bird_name,
                age: age,
                gender: gender,
                breed: breed,
                description: description,
                image: filename
            }
            const result = await birdModel.registerNewBird(birdDetail);
            console.log(result);
            if (result !== null) {
                res.status(201).send({
                    exitcode: 0,
                    bird_id: result[0].bird_id,
                    message: "Register new bird successfully"
                })
            } else {
                res.status(400).send({
                    exitcode: 101,
                    message: "Register new bird failed"
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    getBirdById: async (req, res, next) => {
        try {
            const bird_id = req.params.bird_id;
            const result = await birdModel.getBirdById(bird_id);
            if (result === null) {
                res.status(404).send({
                    exitcode: 101,
                    message: "No bird found"
                })
            } else {
                const birdInfo = {
                    type_name: result.type_name,
                    age: result.age,
                    bird_name: result.bird_name,
                    breed: result.breed,
                    gender: result.gender,
                    image: result.image,
                    description: result.description,
                }
                res.status(200).send({
                    exitcode: 0,
                    message: "Get bird info successfully",
                    bird: birdInfo
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    updateBirdById: async (req, res, next) => {
        try {
            const bird_id = req.params.bird_id;
            const {
                bird_name,
                bird_type,
                age,
                gender,
                breed,
                description,
                image
            } = req.body;
            const birdTypeId = await birdModel.getBirdTypeId(bird_type);
            const updateDetail = {
                bird_id: bird_id,
                type_id: birdTypeId,
                bird_name: bird_name,
                age: age,
                gender: gender,
                breed: breed,
                description: description,
                image: image
            }
            const result = await birdModel.updateBirdById(updateDetail);
            console.log(result);
            if (result === null) {
                res.status(404).send({
                    exitcode: 101,
                    message: "Bird update failed"
                })
            } else {
                res.status(200).send({
                    exitcode: 0,
                    message: "Bird updated successfully"
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    deleteBirdById: async (req, res, next) => {
        try {
            const bird_id = req.params.bird_id;
            const result = await birdModel.deleteBirdById(bird_id);
            if (result === null) {
                res.status(404).send({
                    exitcode: 101,
                    message: "No bird found"
                })
            } else {
                res.status(200).send({
                    exitcode: 0,
                    message: "Bird deleted successfully"
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    },
    getAllBirdType: async (req, res, next) => {
        try {
            const result = await birdModel.getAllBirdType();
            if (result === null) {
                res.status(404).send({
                    exitcode: 101,
                    message: "No bird type found"
                })
            } else {
                const birdTypeList = result.map(item => ({
                    type_id: item.btype_id,
                    type_name: item.name
                }))
                res.status(200).send({
                    exitcode: 0,
                    message: "Get bird type list successfully",
                    bird_types: birdTypeList
                })
            }
        } catch (error) {
          console.log(error.message);
            res.status(500).send("Internal server error");
        }
    }
}
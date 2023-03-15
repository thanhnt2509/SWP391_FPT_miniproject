module.exports = {
    unknownEndpoint: (req, res) => {
       console.error("Unknown endpoint");
       res.status(500).send("Unknown endpoint");
    }
};
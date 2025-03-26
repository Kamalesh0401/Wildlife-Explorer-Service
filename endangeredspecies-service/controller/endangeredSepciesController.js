const EndangeredSpecies = require("../models/endangeredSpeciesData");

const EndangeredSpeciesController = {

    getAllEndangeredSpecies: async (req, res) => {
        try {
            const data = await EndangeredSpecies.find();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
    getEndangeredSpeciesById: async (req, res) => {
        try {
            const id = req.params.id;
            const data = await EndangeredSpecies.findById(id);
            if (!data) {
                return res.status(404).json({ message: "Endangered Species not found" });
            }
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
}


module.exports = EndangeredSpeciesController;

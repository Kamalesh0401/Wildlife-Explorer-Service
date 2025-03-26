const SpeciesData = require("../models/SpeciesProfileData");

const SpeciesProfileController = {

    getAllSpecies: async (req, res) => {
        try {
            const data = await SpeciesData.find();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal Server Error", err });
        }
    },
    getSpeciesById: async (req, res) => {
        try {
            const id = req.params.id;
            const data = await SpeciesData.findById(id);
            if (!data) {
                return res.status(404).json({ message: "Species not found" });
            }
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
};

module.exports = SpeciesProfileController;

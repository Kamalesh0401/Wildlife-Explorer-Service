const animalData = require("../models/animalData");

const AnimalsController = {
    getAllByQuery: async (req, res) => {
        try {
            const { name, species, conservationStatus, habitat, diet } = req.query;
            // Build query object
            const query = {};

            // Filter by name (case-insensitive)
            if (name) {
                query.name = { $regex: new RegExp(name, 'i') };
            }

            // Filter by region (exact match)
            if (species) {
                query.type = species;
            }

            // Filter by wildlife (check if wildlife array contains the value)
            if (habitat) {
                query.habitat = { $in: [habitat] };
            }

            // Filter by activity (check if activities array contains the value)
            if (conservationStatus) {
                query.conservationStatus = { $in: [conservationStatus] };
            }
            // Filter by activity (check if activities array contains the value)
            if (diet) {
                query.diet = { $in: [diet] };
            }

            //const data = await animalData.find({ queryName: { $regex: new RegExp(query, 'i') } }); // You can also use regex or queryName if needed
            const data = await animalData.find(query); // You can also use regex or queryName if needed
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal Server Error", error: err });
        }
    },

    getAnimalsById: async (req, res) => {
        try {
            const id = req.params.id;
            const data = await animalData.findById(id);
            if (!data) {
                return res.status(404).json({ message: "Species not found" });
            }
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal Server Error", error: err });
        }
    },
    getRelatedAnimals: async (req, res) => {
        try {
            const { habitat, diet } = req.query;
            const query = {};

            if (habitat) {
                query.habitat = { $in: [habitat] };
            }
            if (diet) {
                query.diet = { $in: [diet] };
            }
            const data = await animalData.find(query);
            if (!data) {
                return res.status(404).json({ message: "Species not found" });
            }
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal Server Error", error: err });
        }
    },
};

module.exports = AnimalsController;

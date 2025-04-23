const animalData = require("../models/animalData");

const AnimalsController = {
    getAllByQuery: async (req, res) => {
        try {
            const query = req.params.name;
            const data = await animalData.find({ queryName: { $regex: new RegExp(query, 'i') } }); // You can also use regex or queryName if needed
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
};

module.exports = AnimalsController;

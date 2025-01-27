const express = require("express");
const router = express.Router();
const SpeciesData = require("../models/speciesData"); // Assuming you have a mongoose model

// Get all species
router.get("/species", async (req, res) => {
    try {
        const data = await SpeciesData.find();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" ,err});
    }
});

// Get a specific species by ID
router.get("/species/:id", async (req, res) => {
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
});

module.exports = router;

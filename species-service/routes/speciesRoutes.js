const express = require('express');
const router = express.Router();
const SpeciesProfileController = require("../controller/sepciesController");

router.get('/species', SpeciesProfileController.getAllSpecies);
router.get('/species/:id', SpeciesProfileController.getSpeciesById);


module.exports = router;
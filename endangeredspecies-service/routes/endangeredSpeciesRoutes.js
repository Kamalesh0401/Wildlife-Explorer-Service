const express = require('express');
const router = express.Router();
const EndangeredSepciesController = require("../controller/endangeredSepciesController");

router.get('/endangerdspecies', EndangeredSepciesController.getAllEndangeredSpecies);
router.get('/endangerdspecies/:id', EndangeredSepciesController.getEndangeredSpeciesById);


module.exports = router;
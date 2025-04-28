const express = require('express');
const router = express.Router();
const AnimalsController = require("../controller/animalsController");

// Place more specific route first to avoid conflict
router.get('/animals/id/:id', AnimalsController.getAnimalsById);
// router.get('/animals/name/:name', AnimalsController.getAllByQuery);

router.get('/animals/', AnimalsController.getAllByQuery);
router.get('/animals/related', AnimalsController.getRelatedAnimals);

module.exports = router;

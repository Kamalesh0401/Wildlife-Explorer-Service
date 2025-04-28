const express = require('express');
const parksController = require("../controller/parksController");

const router = express.Router();

// Routes
// router.get('/parks/name/:name', parksController.getAllParks); // Get all parks
router.get('/parks', parksController.getAllParks);
router.get('/parks/id/:id', parksController.getParkById); // Get a single park by ID

module.exports = router;
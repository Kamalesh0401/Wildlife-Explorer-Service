const express = require('express');
const forestController = require("../controller/forestController");

const router = express.Router();

// Routes
router.get('/forests/name/:name', forestController.getAllForests); // Get all forests
router.get('/forests/id/:id', forestController.getForestById); // Get a single forest by ID

module.exports = router;
const express = require('express');
const forestController = require("../controller/forestController");

const router = express.Router();

// Routes
router.get('/forests/:name', forestController.getAllForests); // Get all forests
router.get('/forests/:id', forestController.getForestById); // Get a single forest by ID

module.exports = router;
const express = require('express');
const router = express.Router();
const ThreatsController = require("../controller/threatsController");

router.get('/threats', ThreatsController.getAllThreats);

module.exports = router;
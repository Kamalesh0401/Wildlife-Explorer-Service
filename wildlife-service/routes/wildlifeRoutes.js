const express = require('express');
const router = express.Router();
const contactController = require('../controller/wildlifeController');

router.post('/wildlife/contact', contactController.sendContactEmail);

module.exports = router;
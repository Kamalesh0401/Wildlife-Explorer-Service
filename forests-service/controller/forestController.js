const Gallery = require('../models/galleryModel');
const Forest = require('../models/forest');

// Get all forests
exports.getAllForests = async (req, res) => {
    try {
        const query = req.params.name;
        const forests = await Forest.find({ name: { $regex: new RegExp(query, 'i') } }).populate('gallery');
        res.status(200).json({
            status: 'success',
            results: forests.length,
            data: { forests },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch forests',
            error: error.message,
        });
    }
};

// Get a single forest by ID
exports.getForestById = async (req, res) => {
    try {
        const forest = await Forest.findById(req.params.id).populate('gallery');
        if (!forest) {
            return res.status(404).json({
                status: 'fail',
                message: 'forests not found',
            });
        }
        res.status(200).json({
            status: 'success',
            data: { forest },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch forest',
            error: error.message,
        });
    }
};
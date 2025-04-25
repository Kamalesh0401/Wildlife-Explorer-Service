const Parks = require('../models/parksModel');

// Get all parks
exports.getAllParks = async (req, res) => {
    try {
        const query = req.params.name;
        const parks = await Parks.find({ name: { $regex: new RegExp(query, 'i') } });
        res.status(200).json({
            status: 'success',
            results: parks.length,
            data: { parks },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch parks',
            error: error.message,
        });
    }
};

// Get a single park by ID
exports.getParkById = async (req, res) => {
    try {
        const park = await Parks.findById(req.params.id);
        if (!park) {
            return res.status(404).json({
                status: 'fail',
                message: 'park not found',
            });
        }
        res.status(200).json({
            status: 'success',
            data: { park },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to fetch park',
            error: error.message,
        });
    }
};
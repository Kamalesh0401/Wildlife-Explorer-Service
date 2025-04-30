const Parks = require('../models/parksModel');
const Animal = require('../models/animalData');

// Get all parks
exports.getAllParks = async (req, res) => {
    try {
        const { name, region, wildlife, activity } = req.query;

        // Build query object
        const query = {};

        // Filter by name (case-insensitive)
        if (name) {
            query.name = { $regex: new RegExp(name, 'i') };
        }

        // Filter by region (exact match)
        if (region) {
            query.location = region;    
        }

        // Filter by wildlife (check if wildlife array contains the value)
        if (wildlife) {
            query.majorAnimals = { $in: [wildlife] };
        }

        // Filter by activity (check if activities array contains the value)
        if (activity) {
            query.activities = { $in: [activity] };
        }

        // Execute query
        const parks = await Parks.find(query);

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
        const park = await Parks.findById(req.params.id).populate({
            path: 'majorAnimals',
            select: 'name scientificName habitat conservationStatus image',
        });
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
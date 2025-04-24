const mongoose = require('mongoose');

const forestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    overview: {
        type: String,
        required: true,
    },
    conservationStatus: {
        type: String,
        required: true,
    },
    image: {
        type: String, // URL or path to the main image
        required: true,
    },
    gallery: [
        {
            image: String, // URL or path to gallery image
            caption: String,
        },
    ],
    keySpecies: [
        {
            name: String,
            image: String, // URL or path to species image
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    }
}, {
    collection: 'forests'// <-- this ensures it uses the existing collection
});


module.exports = mongoose.model('Forest', forestSchema);;
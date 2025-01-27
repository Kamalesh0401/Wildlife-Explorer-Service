const mongoose = require('mongoose');

const SpeciesDataSchema = new mongoose.Schema({
    commonName: { type: String, required: true },
    scientificName: { type: String, required: true },
    habitat: { type: String, required: true },
    diet: { type: String, required: false },
    behavior: { type: String, required: true },
    conservationStatus: { type: String, required: false },
    threats: { type: String, required: false },
    funFacts: { type: String, required: false },
    image: { type: String, required: false },
    video: { type: String, required: false },
});

module.exports = mongoose.model('SpeciesData', SpeciesDataSchema);
    
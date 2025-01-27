const mongoose = require('mongoose');

const EndangeredSpeciesSchema = new mongoose.Schema({
    commonName: { type: String, required: true },
    endangeredStatus: {
        type: String,
        enum: ['Critically Endangered', 'Endangered', 'Vulnerable', 'Near Threatened'],
        required: true
    },
    population: {
        current: { type: Number, required: true },
        trend: { type: String, enum: ['Increasing', 'Stable', 'Decreasing'], required: true }
    },
    primaryThreats: [{ type: String }],
    conservationEfforts: { type: String, required: false },
    redListCategory: { type: String, required: true },
    protectionMeasures: [{ type: String }],
    image: { type: String }
});

module.exports = mongoose.model('EndangeredSpecies', EndangeredSpeciesSchema);

const mongoose = require('mongoose');

const AnimalSchema = new mongoose.Schema({
    id: String,
    name: String,
    scientificName: String,
    habitat: String,
    description: String,
    conservationStatus: String,
    populationTrend: String,
    geographicRange: [String],
    threats: [String],
    weight: String,
    lifespan: String,
    diet: String,
    foundIn: [String],
    topSpeed: String,
    height: String,
    commonName: String,
    type: String,
    image: String,
    queryName: String
}, {
    collection: 'animals' // <-- this ensures it uses the existing collection
});

module.exports = mongoose.model('Animal', AnimalSchema);

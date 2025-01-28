const mongoose = require('mongoose');

const SpeciesProfileDataSchema = new mongoose.Schema({
    commonName: { type: String, required: true },
    scientificName: { type: String, required: true },
    habitat: { type: String, required: true },
    diet: { type: String, required: false },
    behavior: { type: String, required: true },
    conservationStatus: { type: String, required: false },
    threats: { type: String, required: false },
    funFacts: { type: String, required: false },
    image: { type: mongoose.Schema.Types.ObjectId, ref: "Files", required: false },
    video: { type: mongoose.Schema.Types.ObjectId, ref: "Files", required: false },
    modifiedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true },
    modifiedOn: { type: Date, default: Date.now, required: true }
});

module.exports = mongoose.model('SpeciesProfileData', SpeciesProfileDataSchema);
// endangeredSpecies: { type: mongoose.Schema.Types.ObjectId, ref: "EndangeredSpecies" }, // Reference to EndangeredSpecies
// image: { type: mongoose.Schema.Types.ObjectId, ref: "Image", required: false },
// video: { type: mongoose.Schema.Types.ObjectId, ref: "Image", required: false },
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const apiRoutes = require("./routes/speciesRoutes");

const app = express();

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
    .connect("mongodb+srv://TestUser:Test0401@cluster0.eqlho.mongodb.net/wildlife-explorer?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });

// Use species routes
app.use("/api", apiRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

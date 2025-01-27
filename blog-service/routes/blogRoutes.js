const express = require("express");
const router = express.Router();
const BlogData = require("../models/blogData"); // Assuming you have a mongoose model

// Get all blogs
router.get("/blogs", async (req, res) => {
    try {
        const data = await BlogData.find();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Get a specific blogs by ID
router.get("/blogs/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const data = await BlogData.findById(id);
        if (!data) {
            return res.status(404).json({ message: "Blogs not found" });
        }
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;

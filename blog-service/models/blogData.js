const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Title of the blog
    author: { type: String, required: true }, // Author's name
    content: { type: String, required: true }, // Main content of the blog
    summary: { type: String, required: false }, // Short summary of the blog
    tags: [{ type: String, required: false }], // Tags for categorization
    publishedDate: { type: Date, default: Date.now }, // Date when the blog is published
    updatedDate: { type: Date, default: null }, // Last updated date
    image: { type: String, required: false }, // URL for the blog's image
    video: { type: String, required: false }, // URL for any embedded video
    views: { type: Number, default: 0 }, // Count of views
    likes: { type: Number, default: 0 }, // Count of likes
    comments: [
        {
            userName: { type: String, required: true }, // Name of the user commenting
            commentText: { type: String, required: true }, // Comment text
            commentedAt: { type: Date, default: Date.now }, // Timestamp of the comment
        },
    ], // Array of comments for the blog
    isFeatured: { type: Boolean, default: false }, // If the blog is a featured blog
});

module.exports = mongoose.model("BlogsData", BlogSchema);

const BlogData = require("../models/blogData");

const BlogsController = {

    getAllBlogs: async (req, res) => {
        try {
            const data = await BlogData.find();
            res.json(data);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Internal Server Error" });
        }
    },
    getBlogsById: async (req, res) => {
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
    },
}

module.exports = BlogsController;

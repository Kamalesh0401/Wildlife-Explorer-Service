const express = require('express');
const router = express.Router();
const BlogsController = require("../controller/blogsController");

router.get('/blogs', BlogsController.getAllBlogs);
router.get('/blogs/:id', BlogsController.getBlogsById);

module.exports = router;
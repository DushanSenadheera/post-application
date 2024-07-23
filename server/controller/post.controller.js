const PostModel = require('../model/Post.model');

exports.createPost = async (req, res) => {

    const { title, description, titleColor } = req.body;

    try {
        const Post = await PostModel.create({ title, description,titleColor });
        res.status(201).json({ Post, message: "Post created successfully" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getAllPosts = async (req, res) => {
    try {
        const Posts = await PostModel.find();
        res.status(200).json({ Posts });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getPostById = async (req, res) => {

    const title = req.body.title;

    try {
        const Post = await PostModel.findOne({title: title});
        res.status(200).json({ Post });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



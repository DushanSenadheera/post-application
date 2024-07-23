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

        if (!Post) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json({ Post });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.addComment = async (req, res) => {
    
        const { title, commentText } = req.body;
    
        try {
            const Post = await PostModel.findOne({title: title});
            const comment = { comment: commentText };
            Post.comments.push(comment);
            await Post.save();
            res.status(200).json({ Post, message: "Comment added successfully" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
}



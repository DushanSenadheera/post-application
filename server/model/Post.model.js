const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    comment: {
        type: String,
        default: ''
    }
});

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    titleColor: {
        type: String,
        required: [true, 'Title color is required']
    
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    comments: [CommentSchema]
});

module.exports = mongoose.model('Post', PostSchema);

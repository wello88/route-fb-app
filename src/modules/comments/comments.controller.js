
// Create Comment
import { Comment } from '../../../db/models/comment.module.js';




export const createcomment = async (req, res) => {
    const { content, postId,userId } = req.body;
        try {
        const comment = await Comment.create({ content, postId, userId});
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get Comments for a Post
export const getComments = async (req, res) => {
    const postId = req.params.postId;

    try {
        const comments = await Comment.findAll({ where: { postId } });
        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update Comment
export const updatecomment=async (req, res) => {
    const { content } = req.body;
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }
    await comment.update({ content });
    res.json(comment);
};

// Delete Comment
export const deletecomment= async (req, res) => {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) {
        return res.status(404).json({ error: 'Comment not found' });
    }
    await comment.destroy();
    res.json({ message: 'Comment deleted' });
};


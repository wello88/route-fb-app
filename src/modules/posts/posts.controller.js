// routes/posts.js
import { PostModel } from "../../../db/models/post.module.js";

export const createPost = async (req, res) => {
    const { title, content, authorId } = req.body;
    try {
      const post = await PostModel.create({ title, content, authorId });
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

// Get All Posts
export const getAllPosts= async (req, res) => {
    const posts = await PostModel.findAll();
    res.json(posts);
};

// Get Single Post
export const getsinglepost = async (req, res) => {
    const post = await PostModel.findByPk(req.params.id);
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
};

// Update Post
export const updatepost = async (req, res) => {
    const { id } = req.params;
    const { title, content, authorId } = req.body;
    try {
      const post = await PostModel.findOne({ where: { id, authorId, deleted: false } });
      if (!post) {
        return res.status(404).json({ error: 'Post not found or you do not have permission to edit this post.' });
      }
      post.title = title;
      post.content = content;
      await post.save();
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

// Delete Post (Soft Delete)
export const deletepost = async (req, res) => {
    const { id } = req.params;
    const { authorId } = req.body; 
    try {
      const post = await PostModel.findOne({ where: { id, authorId, deleted: false } });
      if (!post) {
        return res.status(404).json({ error: 'Post not found or you do not have permission to delete this post.' });
      }
      post.deleted = true;
      await post.save();
      res.status(200).json({ message: 'Post has been deleted.' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
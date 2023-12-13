import express from 'express';
import errorHandler from '../middleware/error.js';
import { getAllPosts, getPostById, createPost, updatePost, deletePost } from '../controllers/post.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello');
});

// GET all blog posts
router.get('/posts', getAllPosts);

// GET a single blog post by ID
router.get('/posts/:id', getPostById);

// POST a new blog post
router.post('/posts', createPost);

// PUT/update an existing blog post
router.patch('/posts/:id', updatePost);

// DELETE a blog post
router.delete('/posts/:id', deletePost);

// Use error handling middleware
router.use(errorHandler);

export default router;

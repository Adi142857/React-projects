import BlogPost from "../models/blogPost.js";
import express from "express";


const router = express.Router();

const blogPosts = [];

export const getAllPosts = async (req, res) => {
    res.json(blogPosts);
    console.log(blogPosts) 
}

export const getPostById = async (req, res) => {
    const postId = req.params.id;
    const post = blogPosts.find((post) => post.id === postId);
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Blog post not found' });
    }
}

export const createPost = async (req, res) => {
    const { title, content, author } = req.body;
    const newPost = new BlogPost(title, content, author);
    blogPosts.push(newPost);
    res.status(201).json(newPost);
}

export const updatePost = async (req, res) => {
    const postId = req.params.id;
    const postIndex = blogPosts.findIndex((post) => post.id === postId);
  
    if (postIndex !== -1) {
      const { title, content, author } = req.body;
      blogPosts[postIndex] = { id: postId, title, content, author, timestamp: blogPosts[postIndex].timestamp };
      res.json(blogPosts[postIndex]);
    } else {
      res.status(404).json({ message: 'Blog post not found' });
    }
}

export const deletePost = async (req, res) => {
    const postId = req.params.id;
    const postIndex = blogPosts.findIndex((post) => post.id === postId);
  
    if (postIndex !== -1) {
      const deletedPost = blogPosts.splice(postIndex, 1);
      res.json(deletedPost[0]);
    } else {
      res.status(404).json({ message: 'Blog post not found' });
    }
}

export default router;
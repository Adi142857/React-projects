// index.js

import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const PORT = 3000;
import post from "./routes/post.js"

app.use(bodyParser.json()); // Parse JSON requests


app.use('/', post);

// const blogPosts = [];
// GET all blog posts
// app.get('/posts', (req, res) => {
//     const postId = req.params.id;
//     const postIndex = blogPosts.findIndex((post) => post.id === postId);
  
//     if (postIndex !== -1) {
//       const { title, content, author } = req.body;
//       res.json(blogPosts[postIndex]);
//     }
// });

// // GET a single blog post by ID
// app.get('/posts/:id', (req, res) => {
//   const postId = req.params.id;
//   const post = blogPosts.find((post) => post.id === postId);

//   if (post) {
//     res.status(301).json(post);   
//   } else {
//     res.status(404).json({ message: 'Blog post not found' });
//   }
// });

// // POST a new blog post
// app.post('/posts', (req, res) => {
//   const { title, content, author } = req.body;
//   const newPost = new BlogPost(title, content, author);
//   blogPosts.push(newPost);
//   res.status(201).json(newPost);
// });

// // PUT/update an existing blog post
// app.patch('/posts/:id', (req, res) => {
//   const postId = req.params.id;
//   const postIndex = blogPosts.findIndex((post) => post.id === postId);

//   if (postIndex !== -1) {
//     const { title, content, author } = req.body;
//     blogPosts[postIndex] = { id: postId, title, content, author, timestamp: blogPosts[postIndex].timestamp };
//     res.json(blogPosts[postIndex]);
//   } else {
//     res.status(404).json({ message: 'Blog post not found' });
//   }
// });

// // DELETE a blog post
// app.delete('/posts/:id', (req, res) => {
//   const postId = req.params.id;
//   const postIndex = blogPosts.findIndex((post) => post.id === postId);

//   if (postIndex !== -1) {
//     const deletedPost = blogPosts.splice(postIndex, 1);
//     res.json(deletedPost[0]);
//   } else {
//     res.status(404).json({ message: 'Blog post not found' });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

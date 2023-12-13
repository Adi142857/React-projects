// models/blogPost.js
class BlogPost {
    constructor(title, content, author) {
      this.id = Date.now().toString(); // Unique ID
      this.title = title;
      this.content = content;
      this.author = author;
      this.timestamp = new Date().toString();
    }
  }
  
export default BlogPost;
  

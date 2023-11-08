const Post = require("../models/Post");

// GET all
exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();
    res.status(200).json({ count: posts.length, posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// POST
exports.createNewPost = async (req, res, next) => {
  try {
    let { title, body } = req.body;
    let post = new Post(title, body);
    post = await post.save();
    res.status(200).json({ message: "Post created" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// GET by ID
exports.getPostById = async (req, res, next) => {
  try {
    let postId = req.params.id;

    let [post, _] = await Post.findById(postId);
    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// OMAT LISÄYKSET !!

// Put by ID
exports.putPost = async (req, res, next) => {
  try {
    const postId = req.params.id;
    const { title, body } = req.body;

    let [post, _] = await Post.findById(postId);
    if (!post || post.length === 0) {
      res.status(404).json({ message: "Post not found" });
    } else {
      post[0].title = title;
      post[0].body = body;
      await post[0].save();
      res.status(200).json({ message: "Post updated" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Delete by ID

exports.deletePostById = async (req, res, next) => {
  try {
    const postId = req.params.id;

    const deleted = await Post.deleteById(postId);

    if (deleted) {
      res.status(200).json({ message: "Post deleted" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

// Route Get&Post /posts/ Gets ALL
router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost);

// Get, put and delete specific ID
router
  .route("/:id")
  .get(postControllers.getPostById)
  .put(postControllers.putPost)
  .delete(postControllers.deletePostById);

module.exports = router;

const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// Matches with "/api/comments"
router
  .route("/")
  .get(commentsController.findAll)
  .post(commentsController.create);

router
  .route("/:id")
  .get(commentsController.findById)
  .delete(commentsController.remove);

module.exports = router;
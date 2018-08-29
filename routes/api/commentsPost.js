const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

router.route("/")
  .get(commentsController.findAll)
  .post(commentsController.create);


router.route("/:id")
  .get(commentsController.findById);

  router.route("/:id/reply")
  .get(commentsController.getCommentReplies)
  .post(commentsController.newCommentReplies);

module.exports = router;

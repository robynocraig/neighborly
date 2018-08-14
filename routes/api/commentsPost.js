const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

// Matches with "/api/comments"
router.route("/")
  .get(commentsController.findAll)
  .post(commentsController.create);

module.exports = router;

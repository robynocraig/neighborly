const router = require("express").Router();
const replyController = require("../../controllers/replyController");

// Matches with "/api/comments"
router.route("/")
  .get(replyController.findAll)
  .post(replyController.create);

module.exports = router;

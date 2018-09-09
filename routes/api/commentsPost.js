const router = require("express").Router();
const commentsController = require("../../controllers/commentsController");

router.route("/")
  .get(commentsController.findAll)
  .post(commentsController.create);

router.route("/:id")
  .get(commentsController.findById);

module.exports = router;

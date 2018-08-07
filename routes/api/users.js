const router = require("express").Router();
const userController = require("../../controllers/usersController");

// Matches with "/api/managements"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/managements/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;

const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Matches with "/api/users/:email"
router
  .route("/:email")
  .get(usersController.findByEmail)
  .put(usersController.update)
  .delete(usersController.remove);


module.exports = router;




const router = require("express").Router();
const managementsController = require("../../controllers/managementsController");

// Matches with "/api/managements"
router.route("/")
  .get(managementsController.findAll)
  .post(managementsController.create);

// Matches with "/api/managements/:id"
router
  .route("/:id")
  .get(managementsController.findById)
  .put(managementsController.update)
  .delete(managementsController.remove);

module.exports = router;

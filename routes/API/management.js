const router = require("express").Router();
const managementController= require("../../controllers/managementController");

// Matches with "/api/management"
router.route("/")
  .get(managementController.findAll)
  .post(managementController.create);

// Matches with "/api/management/:id"
router
  .route("/:id")
  .get(managementController.findById)
  .put(managementController.update)
  .delete(managementController.remove);

module.exports = router;

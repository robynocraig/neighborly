const router = require("express").Router();
const managementRoutes = require("./management");

// Management routes
router.use("/management", managementRoutes);

module.exports = router;

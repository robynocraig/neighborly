const router = require("express").Router();
const managementRoutes = require("./managements");

// Management routes
router.use("/managements", managementRoutes);

module.exports = router;

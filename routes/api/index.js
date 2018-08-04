const router = require("express").Router();
const managementRoutes = require("./managements");
const userRoutes = require("./users");
// Management routes
router.use("/managements", managementRoutes);
router.use("/users", userRoutes);

module.exports = router;

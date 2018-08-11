const router = require("express").Router();
const userRoutes = require("./users");

// Management routes
router.use("/users", userRoutes);

module.exports = router;

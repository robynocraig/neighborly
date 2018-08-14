const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./commentsPost");

// Management routes
router.use("/users", userRoutes);
router.use("/comments", postRoutes);

module.exports = router;

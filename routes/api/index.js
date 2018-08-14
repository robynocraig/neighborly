const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./commentsPost");

router.use("/users", userRoutes);
router.use("/comments", postRoutes);

module.exports = router;

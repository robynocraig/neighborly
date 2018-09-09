const router = require("express").Router();
const userRoutes = require("./users");
const postRoutes = require("./commentsPost");
const replyRoutes = require("./reply");

router.use("/users", userRoutes);
router.use("/comments", postRoutes);
router.use("/reply", replyRoutes);

module.exports = router;

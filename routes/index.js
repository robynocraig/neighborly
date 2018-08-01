const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://mcale017.auth0.com/.well-known/jwks.json"
  }),
  audience: 'https://mcale017-neighborly.herokuapp.com/',
  issuer: "https://mcale017.auth0.com/",
  algorithms: ['RS256']
});

// API Routes
router.use("/api", authCheck, apiRoutes);

// If no API routes are hit, send the React app
router.use("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

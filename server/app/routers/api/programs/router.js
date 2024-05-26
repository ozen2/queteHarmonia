const express = require("express");

const router = express.Router();

const { browse } = require("../../../controllers/programsActions");

// Route to get a list of items
router.get("/", browse);

module.exports = router;

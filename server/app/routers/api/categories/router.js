const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

/* Here you code */
const {browse, read} = require("../../../controllers/categoryActions");

router.get("/", browse);


router.use("/:id",read);

/* ************************************************************************* */

module.exports = router;

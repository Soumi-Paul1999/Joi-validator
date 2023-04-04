const express = require("express");

const { registerUser, loginUser } = require("../controllers/userController");
const { runValidation } = require("../validation");
const { schema } = require("../validation/schema");
const router = express.Router();

// api/register
router.post("/register", runValidation(schema.registerSchema), registerUser);

router.post("/login", runValidation(schema.loginSchema), loginUser);

module.exports = router;

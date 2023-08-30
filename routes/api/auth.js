const express = require("express");
const { validateBody, authenticake } = require("../../middlewares");
const { schemas } = require("../../models/user");
const {
  ctrlRegister,
  ctrlLogin,
  ctrlGetCurrent,
  ctrlLogout,
} = require("../../controllers");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), ctrlRegister);

router.post("/login", validateBody(schemas.loginSchema), ctrlLogin);

router.get("/current", authenticake, ctrlGetCurrent);

router.post("/logout", authenticake, ctrlLogout);

module.exports = router;

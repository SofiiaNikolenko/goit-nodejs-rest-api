const express = require("express");
const router = express.Router();
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contacts");
const {
  ctrlGetAll,
  ctrlGetById,
  ctrlAddContact,
  ctrlDeleteContact,
  ctrlUpdateContact,
} = require("../../controllers");

router.get("/", ctrlGetAll);

router.get("/:contactId", ctrlGetById);

router.post("/", validateBody(schemas.addSchema), ctrlAddContact);

router.delete("/:contactId", ctrlDeleteContact);

router.put("/:contactId", validateBody(schemas.addSchema), ctrlUpdateContact);

module.exports = router;

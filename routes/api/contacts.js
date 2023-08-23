const express = require("express");
const router = express.Router();
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models/contact");

const {
  ctrlGetAll,
  ctrlGetById,
  ctrlAddContact,
  ctrlDeleteContact,
  ctrlUpdateContact,
  ctrlUpdateFavorite,
} = require("../../controllers");

router.get("/", ctrlGetAll);

router.get("/:contactId", isValidId, ctrlGetById);

router.post("/", validateBody(schemas.addSchema), ctrlAddContact);

router.delete("/:contactId", isValidId, ctrlDeleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrlUpdateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrlUpdateFavorite
);

module.exports = router;

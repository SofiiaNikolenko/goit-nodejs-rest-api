const { ctrlWrapper } = require("../helpers");

const ctrlGetAll = require("./contacts/getAll");
const ctrlGetById = require("./contacts/getById");
const ctrlAddContact = require("./contacts/addContact");
const ctrlDeleteContact = require("./contacts/deleteContact");
const ctrlUpdateContact = require("./contacts/updateContact");
const ctrlUpdateFavorite = require("./contacts/updateFavorite");

module.exports = {
  ctrlGetAll: ctrlWrapper(ctrlGetAll),
  ctrlGetById: ctrlWrapper(ctrlGetById),
  ctrlAddContact: ctrlWrapper(ctrlAddContact),
  ctrlDeleteContact: ctrlWrapper(ctrlDeleteContact),
  ctrlUpdateContact: ctrlWrapper(ctrlUpdateContact),
  ctrlUpdateFavorite: ctrlWrapper(ctrlUpdateFavorite),
};

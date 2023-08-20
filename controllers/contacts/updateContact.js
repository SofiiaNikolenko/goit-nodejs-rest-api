const contacts = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const updateContact = await contacts.updateContact(contactId, req.body);
  if (!updateContact) {
    throw HttpError(404, "Not found");
  }
  res.json(updateContact);
};

module.exports = updateContact;

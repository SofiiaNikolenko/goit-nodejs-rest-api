const contacts = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const contactForRemove = await contacts.removeContact(contactId);
  if (!contactForRemove) {
    throw HttpError(404, "Not found");
  }
  res.json({ message: "Contact deleted" });
};

module.exports = deleteContact;

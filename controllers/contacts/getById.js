const contacts = require("../../models/contacts");
const { HttpError } = require("../../helpers");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contactById = await contacts.getContactById(contactId);
  if (!contactById) {
    throw HttpError(404, "Not found");
  }
  res.json(contactById);
};

module.exports = getById;

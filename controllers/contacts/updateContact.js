const { Contact } = require("../../models/contact");
const { HttpError } = require("../../helpers");

const updateContact = async (req, res, next) => {
  const { contactId } = req.params;
  const updateContact = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!updateContact) {
    throw HttpError(404, "Not found");
  }
  res.json(updateContact);
};

module.exports = updateContact;

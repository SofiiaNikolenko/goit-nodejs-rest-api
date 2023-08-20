const contacts = require("../../models/contacts");

const addContact = async (req, res, next) => {
  const addContact = await contacts.addContact(req.body);
  res.status(201).json(addContact);
};

module.exports = addContact;

const contacts = require("../../models/contacts");

const getAll = async (req, res, next) => {
  const allContacts = await contacts.listContacts();
  res.json(allContacts);
};

module.exports = getAll;

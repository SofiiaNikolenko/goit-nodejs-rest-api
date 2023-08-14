const fs = require("fs/promises");
const path = require("node:path");
const cripto = require("node:crypto");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, { encoding: "utf8" });
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const data = await listContacts();
  return data.find((contact) => contact.id === contactId) || null;
};

const addContact = async (body) => {
  const { name, email, phone } = body;
  const data = await listContacts();
  const newContact = { id: cripto.randomUUID(), name, email, phone };
  data.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return newContact;
};

const removeContact = async (contactId) => {
  const data = await listContacts();
  const indexToRemove = data.findIndex((contact) => contact.id === contactId);
  if (indexToRemove === -1) {
    return null;
  }
  const deletedContact = data.splice(indexToRemove, 1)[0];
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return deletedContact;
};

const updateContact = async (contactId, body) => {
  const contacts = await listContacts();
  const index = contacts.findIndex((contact) => contact.id === contactId);
  if (index === -1) {
    return null;
  }
  contacts[index] = { contactId, ...body };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return contacts[index];
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
};

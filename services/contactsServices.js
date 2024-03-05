import {readFile,writeFile} from "node:fs/promises";
import {join} from "node:path";
import {randomUUID} from "node:crypto";

const contactsPath = join(process.cwd(), "./db/contacts.json");

async function readContacts(){
    const data = await readFile(contactsPath,{encoding: "utf-8"});
    return JSON.parse(data);
};

function writeContacts(contacts) {
    return writeFile(contactsPath, JSON.stringify(contacts, undefined, 2))
}


async function listContacts() {
    const contacts = await readContacts();
    return contacts;
  }
  
  async function getContactById(contactId) {
    const contacts = await readContacts();
    const contact = contacts.find((contact) => contact.id === contactId);
    return contact;
  }
  
  async function removeContact(contactId) {
    const contacts = await readContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);

    if (index === -1) {
        return null;
    }

    const deletedContact = contacts[index];
    contacts.splice(index,1);
    await writeContacts(contacts);
    return deletedContact;
  }
  
  async function addContact(name, email, phone) {
    const contacts = await readContacts();
    const newContact = {
        id: randomUUID(),
        name,
        email,
        phone,
    };

    contacts.push(newContact);
    await writeContacts(contacts);
    return newContact;
  }

  async function updateContact(contactId,name, email, phone) {
    const contacts = await readContacts();
    const index = contacts.findIndex((contact) => contact.id === contactId);

    if (index === -1) {
      return undefined;
    }

    const updateContact = {
      id: randomUUID(),
      name: name || contacts[index].name,
      email: email || contacts[index].email,
      phone: phone || contacts[index].phone,
    };

    contacts[index] = updateContact;

    await writeContacts(contacts);

    return updateContact;
  }

  export default {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContact,
  }
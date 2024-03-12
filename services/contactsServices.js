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
    const contact = contacts.find((item) => item.id === contactId);
    return contact || null;
  }
  
  async function removeContact(contactId) {
    const contacts = await readContacts();
    const index = contacts.findIndex((item) => item.id === contactId);
    if (index === -1) {
        return null;
    }

    const [result] = contacts.splice(index,1);
    await writeContacts(contacts);
    return result;
  }
  
  async function addContact({name, email, phone}) {
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

  async function updateContactById(contactId,{name, email, phone}) {
    const contacts = await readContacts();
    const index = contacts.findIndex((item) => item.id === contactId);
    if (index === -1) {
      return undefined;
    }

    contacts[index] = {
      id: contactId,
      name,
      email,
      phone};

    await writeContacts(contacts);

    return contacts[index] ;
  }

  export default {
    listContacts,
    getContactById,
    removeContact,
    addContact,
    updateContactById,
  }
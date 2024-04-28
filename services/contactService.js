import { Contact } from "../models/contact.js";

export const getContactsService = async () => { 
   const contacts = await Contact.find()
   return contacts;
};

export const deleteContactService = async (id) => {
const removeContact = await Contact.findByIdAndDelete(id);
return removeContact;
};

export const createContactService = async (contactData) => {
    const newContact = await Contact.create(contactData);
    return newContact;
};

export const updateContactService = async (id, contactData) => {
    const upContact = await Contact.findByIdAndUpdate(
        id,
        contactData,
        { new: true}
    );
        return upContact;
};

export const upStatusContactService = async (id, contactData) => {
    const newStatus = await Contact.findByIdAndUpdate(
    id,
    contactData,
     {new: true,},
);
return newStatus;
};

export const checkContactExistsService = async (filter) => {
    const contact = await Contact.exists(filter);
return contact
};

export const getContactsByIdService = async (id) => {
    const contact = await Contact.findById(id)
return contact
};

import { Contact } from "../models/contact.js";

export const getContactsService = () => Contact.find();

export const deleteContactService = (id) => Contact.findByIdAndDelete(id);

export const createContactService = async (contactData) => {
    const newContact = await Contact.create(contactData);
    return newContact;
};

export const updateContactService = (contact, contactData) =>{
    Object.keys(contactData).forEach((key) =>{
        contact[key] = contactData[key];
    });
    return contact.save();
};

export const upStatusContactService = async (contact, contactData) => {
    const newStatus = await Contact.findByIdAndUpdate(
    contact.id,
    contactData,
     {new: true,},
);
return newStatus;
};

export const checkContactExistsService = (filter) => Contact.exists(filter);

export const getContactsByIdService = (id) => Contact.findById(id);

import { Contact } from "../models/contact.js";

export const getContactsService = () => Contact.find();

export const deleteContactService = (id) => Contact.findByIdAndDelete(id);

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

export const checkContactExistsService = (filter) => Contact.exists(filter);

export const getContactsByIdService = (id) => Contact.findById(id);

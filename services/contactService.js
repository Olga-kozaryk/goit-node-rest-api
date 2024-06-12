import { Contact } from "../models/contactModel.js";

export const getContactsService = async (owner) => { 
   const contacts = await Contact.find({ owner }, "-createdAt -updatedAt")
   return contacts;
};

export const deleteContactService = async (id, owner) => {
const removeContact = await Contact.findByIdAndDelete({ _id: id,owner });
return removeContact;
};

export const createContactService = async (contactData, owner) => {
    const newContact = await Contact.create({...contactData, owner});
    return newContact;
};

export const updateContactService = async (id, contactData, owner) => {
    const upContact = await Contact.findByIdAndUpdate(
        {
        _id: id,
        owner,
        },
        contactData,
        { new: true}
    );
        return upContact;
};

export const upStatusContactService = async (id, contactData, owner) => {
    const newStatus = await Contact.findByIdAndUpdate(
        {
        _id: id,
        owner,
        },
    contactData,
     {new: true,},
);
return newStatus;
};

export const checkContactExistsService = async (filter) => {
    const contact = await Contact.exists(filter);
return contact
};

export const getContactsByIdService = async (id, owner) => {
    const contact = await Contact.findById({ _id: id,owner });
return contact
};

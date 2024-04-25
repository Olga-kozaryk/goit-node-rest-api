import { catchAsync } from "../helpers/catchAsync.js";
import { 
    createContactService,
    deleteContactService,
    getContactsByIdService,
    getContactsService,
    updateContactService,
    upStatusContactService,
} from "../services/contactService.js";

export const getAllContacts = catchAsync(async (reg,res) => {
const contacts = await getContactsService();
res.status(200).json({contacts});
});

export const getOneContact = catchAsync(async (reg, res) => {
const {id} = reg.params;
const contact = await getContactsByIdService(id);
res.status(200).json({contact});
});

export const deleteContact = catchAsync(async (reg, res) =>{
const contact = await deleteContactService(reg.contact.id);
res.sendStatus(204).json({message:"Deleted contact"});
});

export const createContact = catchAsync(async (reg, res) => {
const newContact = await createContactService(reg.body);
res.status(201).json({
    contact: newContact,
});
});

export const updateContact = catchAsync(async (reg, res) => {
const upContact = await updateContactService(reg.contact, reg.body);
res.status(200).json({
    contact: upContact,
});
});

export const updateStatusContact = catchAsync(async (reg, res) => {
    const favoriteContact = await upStatusContactService(reg.contact, reg.body);

    res.status(200).json(favoriteContact);
});

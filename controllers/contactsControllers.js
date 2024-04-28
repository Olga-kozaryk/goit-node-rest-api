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

res.status(200).json(contacts);
});

export const getOneContact = catchAsync(async (reg, res, next) => {
const {id} = reg.params;
const contact = await getContactsByIdService(id);
res.status(200).json(contact);
});

export const deleteContact = catchAsync(async (reg, res, next) =>{
const {id} = reg.params;
const delContact = await deleteContactService(id);
res.status(204).json(delContact);
});

export const createContact = catchAsync(async (reg, res,) => {
const newContact = await createContactService(reg.body);
res.status(201).json(
    newContact,
);
});

export const updateContact = catchAsync(async (reg, res) => {
const {id} = reg.params;
const contact = await updateContactService(id, reg.body);

res.status(200).json(contact);
});

export const updateStatusContact = catchAsync(async (reg, res, next) => {
const {id} = reg.params;
const {favorite} = reg.body;
const favoriteContact = await upStatusContactService(id, { favorite });
    res.status(200).json(favoriteContact);
});

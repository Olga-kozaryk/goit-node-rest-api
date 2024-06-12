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
const { _id: owner } = req.user;
const contacts = await getContactsService(owner);

res.status(200).json(contacts);
});

export const getOneContact = catchAsync(async (reg, res) => {
const { _id: owner } = req.user;
const {id} = reg.params;
const contact = await getContactsByIdService(id, owner);
if (!contact) {
    return res.status(404).send({message:'Not Found'});
}
res.status(200).json(contact);
});

export const deleteContact = catchAsync(async (reg, res) =>{
const { _id: owner } = req.user;
const {id} = reg.params;
const delContact = await deleteContactService(id, owner);
if (!delContact) {
    return res.status(404).send({message:'Not Found'});
}
res.status(200).json(delContact);
});

export const createContact = catchAsync(async (reg, res) => {
const { _id: owner } = req.user;                
const newContact = await createContactService(reg.body, owner);
res.status(201).json(
    newContact,
);
});

export const updateContact = catchAsync(async (reg, res) => {
if (Object.keys(reg.body).length < 1) {
    return res.status(400).send({message:"Body must have at least one field"})
      }
const { _id: owner } = req.user;
const {id} = reg.params;
const contact = await updateContactService(id, owner, reg.body);
if (!contact) {
    return res.status(404).send({message:'Not Found'});
}
res.status(200).json(contact);
});

export const updateStatusContact = catchAsync(async (reg, res) => {
const { _id: owner } = req.user;
const {id} = reg.params;
const {favorite} = reg.body;
const favoriteContact = await upStatusContactService(id, { favorite }, owner);
if (favoriteContact === null) {
    return res.status(404).send({message:'Not Found'});
}
    res.status(200).json(favoriteContact);
});

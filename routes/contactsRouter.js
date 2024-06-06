import express from "express";

import { 
    createContact,
    deleteContact,
    getAllContacts,
    getOneContact,
    updateContact,
    updateStatusContact,
} from "../controllers/contactsControllers.js";

import { 
    createContactSchema, 
    updateContactSchema, 
    updateStatusSchema
} from "../helpers/contactValidators.js";
import { validateBody } from "../helpers/validateBody.js";
import { isValidId } from "../helpers/isValidId.js";

 const contactsRouter = express.Router();

contactsRouter
.route('/')
.get(getAllContacts)
.post(validateBody(createContactSchema),createContact);

contactsRouter.patch('/:id/favorite',
isValidId,
validateBody(updateStatusSchema), 
updateStatusContact);

contactsRouter.use('/:id',isValidId );
contactsRouter
.route('/:id')
.get(getOneContact)
.put(validateBody(updateContactSchema), updateContact)
.delete(deleteContact);

export default contactsRouter;

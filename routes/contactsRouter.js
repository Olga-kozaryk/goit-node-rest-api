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
    checkCreateContact, 
    checkUpdateContactData, 
    isValidId
} from "../middlewares/contactMiddlewares.js";

 const contactsRouter = express.Router();

contactsRouter
.route('/')
.get(getAllContacts)
.post(checkCreateContact,createContact);

contactsRouter.patch('/:id/favorite',
isValidId,
checkUpdateContactData, 
updateStatusContact);

contactsRouter.get('./:id', isValidId, getOneContact)

contactsRouter.use('./:id',isValidId );
contactsRouter
.route('./:id')
.put(checkUpdateContactData, updateContact)
.delete(deleteContact);

export default contactsRouter;

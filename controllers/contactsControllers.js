import contactsService from "../services/contactsServices.js";

export const getAllContacts = async(req, res) => {
    try {
        const data = await contactsService.listContacts();
        res.status(200).json(data)
    } catch (error) {
        throw HttpError(404,error.message);
    }
};

export const getOneContact = async(req, res) => {
    try {
        const {id} = req.params;
        const data = await contactsService.getContactById();
        res.status(200).json(data);
    } catch (error) {
        throw HttpError(404,error.message);
    }
};

export const deleteContact = async(req, res) => {
    try {
        const {id} = req.params;
        const data = await contactsService.removeContact(id);
        res.status(200).json(data);
    } catch (error) {
        throw HttpError(404,error.message);
    }
};

export const createContact = async(req, res) => {
    try {
        const data = await contactsService.addContact(req.body);
        res.status(201).json(data);
    } catch (error) {
        throw HttpError(404,error.message);
    }
};

export const updateContact = async(req, res) => {
    try {
        const { id } = req.params;
        const data = await contactsService.updateContact(id, req.body);
        res.status(201).json(data);
    } catch (error) {
        throw HttpError(404,error.message);
    }
};
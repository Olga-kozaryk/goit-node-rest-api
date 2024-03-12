import HttpError from "../helpers/HttpError.js";
import contactsService from "../services/contactsServices.js";

export const getAllContacts = async(req, res,next) => {
    try {
        const data = await contactsService.listContacts();
        if(!data){
            throw HttpError(404,error.message);
        }
        res.status(200).json(data)
    } catch (error) {
        next(HttpError(404,"Not found"));
    }
};

export const getOneContact = async(req, res,next) => {
    try {
        const {id} = req.params;
        const data = await contactsService.getContactById(id);
        if(!data){
            throw HttpError(404,error.message);
        }
        res.status(200).json(data);
    } catch (error) {
        next(HttpError(404,"Not found"));
    }
};

export const deleteContact = async(req, res,next) => {
    try {
        const {id} = req.params;
        const data = await contactsService.removeContact(id);
        if(!data){
            throw HttpError(404,error.message);
        }
        res.status(200).json(data);
    } catch (error) {
        next (HttpError(404,"Not found"));
    }
};

export const createContact = async(req, res,next) => {
    try {
        const data = await contactsService.addContact(req.body);
        res.status(201).json(data);
    } catch (error) {
        next(error);
    }
};

export const updateContact = async(req, res,next) => {
    try {
        const { id } = req.params;
        const data = await contactsService.updateContactById(id, req.body);
        if(!data){
            throw HttpError(404,error.message);
        }
        res.status(200).json(data);
    } catch (error) {
        next (HttpError(404,"Not found"));
    }
};
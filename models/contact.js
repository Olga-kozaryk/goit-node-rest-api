import { model, Schema } from "mongoose";
import { handleError } from "../helpers/handleError.js";

const contactSchema = new Schema (
    {
        name: {
          type: String, 
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        phone: {
          type: String,
          required: true,
        },
        favorite: {
          type: Boolean,
          default: false,
        },
      },
      { versionKey: false });
      contactSchema.post("save", handleError)

export const Contact = model('Contact', contactSchema);

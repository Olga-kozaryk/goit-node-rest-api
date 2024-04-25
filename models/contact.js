import { model, Schema } from "mongoose";
import { handleError } from "../helpers/handleError.js";

const contactShema = new Schema (
    {
        name: {
          type: String,
          required: [true, "Set name for contact"],
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
      contactShema.post("save", handleError)

export const Contact = model('Contact', contactShema);

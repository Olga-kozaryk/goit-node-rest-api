import { model, Schema } from "mongoose";

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
      })

export const Contact = model('Contact', contactShema);

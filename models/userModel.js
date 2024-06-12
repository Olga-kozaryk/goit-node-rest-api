import { model, Schema} from "mongoose";
import { handleError } from "../helpers/handleError.js";

const userSchema = new Schema(
    {
        password: {
          type: String,
          required: [true, 'Password is required'],
        },
        email: {
          type: String,
          required: [true, 'Email is required'],
          unique: true,
        },
        subscription: {
          type: String,
          enum: ["starter", "pro", "business"],
          default: "starter"
        },
        token: {
          type: String,
          default: null,
        },
      },
      {
        timestamps:true,
        versionKey:false,
      },
);

userSchema.post("save",handleError);

export const User = model("user", userSchema);
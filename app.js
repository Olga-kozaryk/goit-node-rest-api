import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Database conection succesfull"))
  .catch((error) => {
    console.error("Database conection error", error);
    process.exit(1);
  });

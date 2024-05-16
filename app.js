import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

import contactsRouter from "./routes/contactsRouter.js";

dotenv.config();

const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("Database conection succesfull"))
  .catch((error) => {
    console.error("Database conection error", error);
    process.exit(1);
  });

  app.use(morgan("tiny"));
  app.use(express.json());
  app.use(cors());

  app.use('/api/contacts', contactsRouter);

  app.use('*',(reg,res) => {
    res.status(404).json({message:"Resource not found!"});
  });

  app.use((error, reg, res) => {
    console.error(error);
    res.status(error.status ?? 500).json({message:error.message});
  });

  app.listen(3000, () => {
    console.log("Server is running. Use our API on port: 3000");
  });

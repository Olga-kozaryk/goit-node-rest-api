import mongoose from "mongoose";

const DB_URL = "mongodb+srv://Olga:Password_123@cluster0.j0iyrwv.mongodb.net/db-contacts?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB_URL)
  .then(() => console.log("Database conection succesfull"))
  .catch((error) => {
    console.error("Database conection error", error);
    process.exit(1);
  });

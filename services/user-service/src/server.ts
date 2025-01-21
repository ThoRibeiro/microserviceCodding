import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user";

dotenv.config();

const app = express();

// Routes pour les utilisateurs
app.use("/users", userRoutes);

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/user-service", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => {
    console.log("Connected to MongoDB");

    // Lancement du serveur
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`User Service running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

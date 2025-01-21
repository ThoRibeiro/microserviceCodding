import express, { type NextFunction, type Request, type Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import orderRoutes from "./routes/order";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes principales
app.use("/orders", orderRoutes);

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/order-service", {
  } as mongoose.ConnectOptions)
  .then(() => {
    console.log("Connected to MongoDB");

    // Lancement du serveur
    const PORT = process.env.PORT || 3002;
    app.listen(PORT, () => {
      console.log(`Product Service running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

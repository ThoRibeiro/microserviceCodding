import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import paymentRoutes from "./routes/payment";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/payments", paymentRoutes);

// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://mongo:27017/payment-service", {
  } as mongoose.ConnectOptions)
  .then(() => {
    console.log("Connected to MongoDB");

    // Lancement du serveur
    const PORT = process.env.PORT || 3004;
    app.listen(PORT, () => {
      console.log(`Payment Service running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

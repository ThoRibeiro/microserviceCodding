import express, { type NextFunction, type Request, type Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import orderRoutes from "./routes/order"

dotenv.config();

const app = express();

// Middlewares globaux
app.use(cors());
app.use(bodyParser.json());

// Routes principales
app.use("/orders", orderRoutes);

// Connexion à MongoDB
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/order-service";
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as mongoose.ConnectOptions)
  .then(() => {
    console.log("Connected to MongoDB");

    // Lancer le serveur
    const PORT = process.env.PORT || 3002;
    app.listen(PORT, () => {
      console.log(`Order Service running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Quitte le processus en cas d'erreur critique
  });

// Route de base pour tester le service
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Order Service is up and running!",
  });
});

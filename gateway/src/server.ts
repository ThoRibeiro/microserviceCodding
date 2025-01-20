import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Configuration des proxys vers les microservices
app.use("/users", createProxyMiddleware({ target: "http://localhost:3001", changeOrigin: true }));
app.use("/orders", createProxyMiddleware({ target: "http://localhost:3002", changeOrigin: true }));
app.use("/products", createProxyMiddleware({ target: "http://localhost:3003", changeOrigin: true }));

// Point d'entrée de l'API Gateway
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue dans l'API Gateway" });
});

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway en cours d'exécution sur le port ${PORT}`);
});

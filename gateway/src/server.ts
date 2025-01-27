import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Configuration des proxys vers les microservices
app.use("/users", createProxyMiddleware({ target: process.env.USER_SERVICE, changeOrigin: true }));
app.use("/orders", createProxyMiddleware({ target: process.env.ORDER_SERVICE, changeOrigin: true }));
app.use("/products", createProxyMiddleware({ target: process.env.PRODUCT_SERVICE, changeOrigin: true }));

// Point d'entrée de l'API Gateway
app.get("/", (req, res) => {
  res.json({ message: "Bienvenue dans l'API Gateway" });
});

// Lancement du serveur
const PORT = process.env.PORT_GATEWAY || 3000;
app.listen(PORT, () => {
  console.log(`API Gateway en cours d'exécution sur le port ${PORT}`);
});

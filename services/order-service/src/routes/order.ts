import { Router } from "express";
import { OrderController } from "../controllers/orderController";


const orderRoutes = Router();

// Récupérer toutes les commandes
orderRoutes.get("/", OrderController.getOrders);

// Récupérer une commande par ID
orderRoutes.get("/:id", OrderController.getOrderById);

// Créer une nouvelle commande
orderRoutes.post("/", OrderController.createOrder);

// Modifier une commande
orderRoutes.put("/:id", OrderController.updateOrder);

// Supprimer une commande
orderRoutes.delete("/:id", OrderController.deleteOrder);

export default orderRoutes;

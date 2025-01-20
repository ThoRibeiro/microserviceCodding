import { Router } from "express";
import { OrderController } from "../controllers/orderController";


const router = Router();

// Récupérer toutes les commandes
router.get("/", OrderController.getOrders);

// Récupérer une commande par ID
router.get("/:id", OrderController.getOrderById);

// Créer une nouvelle commande
router.post("/", OrderController.createOrder);

// Modifier une commande
router.put("/:id", OrderController.updateOrder);

// Supprimer une commande
router.delete("/:id", OrderController.deleteOrder);

export default router;

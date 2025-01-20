import type { Request, Response } from "express";
import type { IOrder } from "../models/order";
import { OrderService } from "../services/orderService";


export class OrderController {
  // Récupérer toutes les commandes
  static async getOrders(req: Request, res: Response): Promise<void> {
    try {
      const orders: IOrder[] = await OrderService.getAllOrders();
      res.status(200).json({ status: 200, data: orders });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error fetching orders", error });
    }
  }

  // Récupérer une commande par ID
  static async getOrderById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const order: IOrder | null = await OrderService.getOrderById(id);

      if (!order) {
        res.status(404).json({ status: 404, message: "Order not found" });
      }

      res.status(200).json({ status: 200, data: order });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error fetching order", error });
    }
  }

  // Créer une nouvelle commande
  static async createOrder(req: Request, res: Response): Promise<void> {
    try {
      const { productId, userId, quantity, totalPrice } = req.body;

      if (!productId || !userId || !quantity || !totalPrice) {
        res.status(400).json({ status: 400, message: "All fields are required" });
      }

      const order: IOrder = await OrderService.createOrder({ productId, userId, quantity, totalPrice });
      res.status(201).json({ status: 201, message: "Order created", data: order });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error creating order", error });
    }
  }

  // Modifier une commande
  static async updateOrder(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updatedOrder: IOrder | null = await OrderService.updateOrder(id, data);
      if (!updatedOrder) {
        res.status(404).json({ status: 404, message: "Order not found" });
      }

        res.status(200).json({ status: 200, message: "Order updated", data: updatedOrder });
    } catch (error) {
        res.status(500).json({ status: 500, message: "Error updating order", error });
    }
  }

  // Supprimer une commande
  static async deleteOrder(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const deletedOrder: IOrder | null = await OrderService.deleteOrder(id);
      if (!deletedOrder) {
        res.status(404).json({ status: 404, message: "Order not found" });
      }

      res.status(200).json({ status: 200, message: "Order deleted", data: deletedOrder });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error deleting order", error });
    }
  }
}

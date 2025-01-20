import Order, { type IOrder } from "../models/order";

export class OrderService {
  // Récupérer toutes les commandes
  static async getAllOrders(): Promise<IOrder[]> {
    return await Order.find();
  }

  // Récupérer une commande par ID
  static async getOrderById(id: string): Promise<IOrder | null> {
    return await Order.findById(id);
  }

  // Créer une nouvelle commande
  static async createOrder(data: Partial<IOrder>): Promise<IOrder> {
    const newOrder = new Order(data);
    return await newOrder.save();
  }

  // Modifier une commande
  static async updateOrder(id: string, data: Partial<IOrder>): Promise<IOrder | null> {
    return await Order.findByIdAndUpdate(id, data, { new: true });
  }

  // Supprimer une commande
  static async deleteOrder(id: string): Promise<IOrder | null> {
    return await Order.findByIdAndDelete(id);
  }
}

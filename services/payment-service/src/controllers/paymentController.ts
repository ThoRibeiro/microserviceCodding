import type { Request, Response } from "express";
import { PaymentService } from "../services/paymentService";

export class PaymentController {
  // Récupérer tous les paiements
  static async getPayments(req: Request, res: Response): Promise<void> {
    try {
      const payments = await PaymentService.getAllPayments();
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error fetching payments", error });
    }
  }

  // Récupérer un paiement par ID
  static async getPaymentById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const payment = await PaymentService.getPaymentById(id);

      if (!payment) {
        res.status(404).json({ status: 404, message: "Payment not found" });
        return;
      }

      res.status(200).json(payment);
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error fetching payment", error });
    }
  }

  // Créer un nouveau paiement
  static async createPayment(req: Request, res: Response): Promise<void> {
    try {
      const { orderId, amount, status } = req.body;

      if (!orderId || !amount) {
        res.status(400).json({ status: 400, message: "Order ID and amount are required" });
        return;
      }

      const payment = await PaymentService.createPayment({ orderId, amount, status });
      res.status(201).json({ status: 201, message: "Payment created", data: payment });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error creating payment", error });
    }
  }

  // Mettre à jour un paiement
  static async updatePayment(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updatedPayment = await PaymentService.updatePayment(id, data);
      if (!updatedPayment) {
        res.status(404).json({ status: 404, message: "Payment not found" });
        return;
      }

      res.status(200).json({ status: 200, message: "Payment updated", data: updatedPayment });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error updating payment", error });
    }
  }

  // Supprimer un paiement
  static async deletePayment(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const deletedPayment = await PaymentService.deletePayment(id);
      if (!deletedPayment) {
        res.status(404).json({ status: 404, message: "Payment not found" });
        return;
      }

      res.status(200).json({ status: 200, message: "Payment deleted" });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error deleting payment", error });
    }
  }
}

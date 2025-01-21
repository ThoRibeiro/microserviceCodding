import Payment, { type IPayment } from "../models/payment";

export class PaymentService {
  // Récupérer tous les paiements
  static async getAllPayments(): Promise<IPayment[]> {
    return await Payment.find();
  }

  // Récupérer un paiement par ID
  static async getPaymentById(id: string): Promise<IPayment | null> {
    return await Payment.findById(id);
  }

  // Créer un nouveau paiement
  static async createPayment(data: Partial<IPayment>): Promise<IPayment> {
    const newPayment = new Payment(data);
    return await newPayment.save();
  }

  // Mettre à jour un paiement
  static async updatePayment(id: string, data: Partial<IPayment>): Promise<IPayment | null> {
    return await Payment.findByIdAndUpdate(id, data, { new: true });
  }

  // Supprimer un paiement
  static async deletePayment(id: string): Promise<IPayment | null> {
    return await Payment.findByIdAndDelete(id);
  }
}

import { Router } from "express";
import { PaymentController } from "../controllers/paymentController";

const paymentRoutes = Router();

paymentRoutes.get("/", PaymentController.getPayments);
paymentRoutes.get("/:id", PaymentController.getPaymentById);
paymentRoutes.post("/", PaymentController.createPayment);
paymentRoutes.put("/:id", PaymentController.updatePayment);
paymentRoutes.delete("/:id", PaymentController.deletePayment);

export default paymentRoutes;

import mongoose, { Schema, Document } from "mongoose";

export interface IPayment extends Document {
  orderId: string;
  amount: number;
  status: string;
  createdAt: Date;
}

const PaymentSchema: Schema = new Schema({
  orderId: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IPayment>("Payment", PaymentSchema);

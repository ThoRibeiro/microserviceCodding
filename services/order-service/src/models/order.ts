import mongoose, { Schema, Document } from "mongoose";

export interface IOrder extends Document {
  productId: number;
  userId: number;
  quantity: number;
  totalPrice: number;
  status: string;
  createdAt: Date;
}

const Order: Schema = new Schema({
  productId: { type: Number, required: true },
  userId: { type: Number, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  status: { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model<IOrder>("Order", Order);

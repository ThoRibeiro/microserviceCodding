import { Router } from "express";
import { UserController } from "../controllers/userController";

const userRoutes = Router();

userRoutes.get("/", UserController.getUsers);
userRoutes.get("/:id", UserController.getUserById);
userRoutes.post("/", UserController.createUser);
userRoutes.put("/:id", UserController.updateUser);
userRoutes.delete("/:id", UserController.deleteUser);
userRoutes.put("/:id/increment-payments", UserController.incrementTotalPayments);
userRoutes.put("/:id/decrement-payments", UserController.decrementTotalPayments);

export default userRoutes;

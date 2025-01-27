import type { Request, Response } from "express";
import { UserService } from "../services/userService";
import User from "../models/user";


export class UserController {
  // Récupérer tous les utilisateurs
  static async getUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error fetching users", error });
    }
  }

  // Récupérer un utilisateur par ID
  static async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const user = await UserService.getUserById(id);

      if (!user) {
        res.status(404).json({ status: 404, message: "User not found" });
      }

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error fetching user", error });
    }
  }

  // Créer un nouvel utilisateur
  static async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;

      if (!name || !email || !password) {
        res.status(400).json({ status: 400, message: "All fields are required" });
      }

      const user = await UserService.createUser({ name, email, password });
      res.status(201).json({ status: 201, message: "User created", data: user });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error creating user", error });
    }
  }

  // Mettre à jour un utilisateur
  static async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updatedUser = await UserService.updateUser(id, data);
      if (!updatedUser) {
        res.status(404).json({ status: 404, message: "User not found" });
      }

      res.status(200).json({ status: 200, message: "User updated", data: updatedUser });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error updating user", error });
    }
  }

  // Supprimer un utilisateur
  static async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const deletedUser = await UserService.deleteUser(id);
      if (!deletedUser) {
        res.status(404).json({ status: 404, message: "User not found" });
      }

      res.status(200).json({ status: 200, message: "User deleted" });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error deleting user", error });
    }
  }

  // Incremente le champ "totalAmount"
  static async incrementTotalPayments(req: Request, res: Response): Promise<any> {
    try {
      const { id } = req.params;
      const { amount } = req.body;

      if (!amount) {
        res.status(400).json({ message: "Amount is required" });
        return;
      }

      const updatedUser = await UserService.incrementTotalPayments(id, amount);

      if (!updatedUser) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      res.status(200).json({ message: "Total payments incremented successfully", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Error incrementing total payments", error });
    }
  }

  // Decremente le champ "totalAmount"
  static async decrementTotalPayments(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { amount } = req.body;

      if (!amount) {
        res.status(400).json({ message: "Amount is required" });
        return;
      }

      const updatedUser = await UserService.decrementTotalPayments(id, amount);

      if (!updatedUser) {
        res.status(404).json({ message: "User not found" });
        return;
      }

      res.status(200).json({ message: "Total payments decremented successfully", user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: "Error decrementing total payments", error });
    }
  }
}

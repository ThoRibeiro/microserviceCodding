import User, { type IUser } from "../models/user";

export class UserService {
  // Récupérer tous les utilisateurs
  static async getAllUsers(): Promise<IUser[]> {
    return await User.find();
  }

  // Récupérer un utilisateur par ID
  static async getUserById(id: string): Promise<IUser | null> {
    return await User.findById(id);
  }

  // Créer un nouvel utilisateur
  static async createUser(data: Partial<IUser>): Promise<IUser> {
    const newUser = new User(data);
    return await newUser.save();
  }

  // Mettre à jour un utilisateur
  static async updateUser(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  // Supprimer un utilisateur
  static async deleteUser(id: string): Promise<IUser | null> {
    return await User.findByIdAndDelete(id);
  }
}

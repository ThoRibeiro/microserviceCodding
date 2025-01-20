import Product, { type IProduct } from "../models/product";

export class ProductService {
  // Récupérer tous les produits
  static async getAllProducts(): Promise<IProduct[]> {
    return await Product.find();
  }

  // Récupérer un produit par ID
  static async getProductById(id: string): Promise<IProduct | null> {
    return await Product.findById(id);
  }

  // Créer un nouveau produit
  static async createProduct(data: Partial<IProduct>): Promise<IProduct> {
    const newProduct = new Product(data);
    return await newProduct.save();
  }

  // Mettre à jour un produit
  static async updateProduct(id: string, data: Partial<IProduct>): Promise<IProduct | null> {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  }

  // Supprimer un produit
  static async deleteProduct(id: string): Promise<IProduct | null> {
    return await Product.findByIdAndDelete(id);
  }
}


import type { Request, Response } from "express";
import { ProductService } from "../services/productService";

export class ProductController {
  // Récupérer tous les produits
  static async getProducts(req: Request, res: Response): Promise<void> {
    try {
      const products = await ProductService.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error fetching products", error });
    }
  }

  // Récupérer un produit par ID
  static async getProductById(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const product = await ProductService.getProductById(id);

      if (!product) {
        res.status(404).json({ status: 404, message: "Product not found" });
      }

      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error fetching product", error });
    }
  }

  // Créer un nouveau produit
  static async createProduct(req: Request, res: Response): Promise<void> {
    try {
      const { name, description, price, stock } = req.body;

      if (!name || !description || !price || !stock) {
        res.status(400).json({ status: 400, message: "All fields are required" });
      }

      const product = await ProductService.createProduct({ name, description, price, stock });
      res.status(201).json({ status: 201, message: "Product created", data: product });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error creating product", error });
    }
  }

  // Mettre à jour un produit
  static async updateProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data = req.body;

      const updatedProduct = await ProductService.updateProduct(id, data);
      if (!updatedProduct) {
        res.status(404).json({ status: 404, message: "Product not found" });
      }

      res.status(200).json({ status: 200, message: "Product updated", data: updatedProduct });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error updating product", error });
    }
  }

  // Supprimer un produit
  static async deleteProduct(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;

      const deletedProduct = await ProductService.deleteProduct(id);
      if (!deletedProduct) {
        res.status(404).json({ status: 404, message: "Product not found" });
      }

      res.status(200).json({ status: 200, message: "Product deleted" });
    } catch (error) {
      res.status(500).json({ status: 500, message: "Error deleting product", error });
    }
  }
}

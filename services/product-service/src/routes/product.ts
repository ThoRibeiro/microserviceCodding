import { Router } from "express";
import { ProductController } from "../controllers/productController";

const productRoutes = Router();

productRoutes.get("/", ProductController.getProducts);
productRoutes.get("/:id", ProductController.getProductById);
productRoutes.post("/", ProductController.createProduct);
productRoutes.put("/:id", ProductController.updateProduct);
productRoutes.delete("/:id", ProductController.deleteProduct);

export default productRoutes;

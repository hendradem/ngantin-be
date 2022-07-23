import express from "express";
import {
  getUsers,
  Register,
  Login,
  Logout,
  ActivateSellerMode,
} from "../controllers/Users.js";
import {
  getProducts,
  addProduct,
  getProduct,
  getProductForUpdate,
  editProduct,
  deleteProduct,
} from "../controllers/Products.js";

import { addTransaction, getSales } from "../controllers/Transactions.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.post("/register", Register);
router.post("/activateSellerMode", ActivateSellerMode);
router.post("/login", Login);
router.delete("/logout", Logout);

router.get("/products", getProducts);
router.post("/product", getProduct);
router.post("/getProductForUpdate", getProductForUpdate);
router.post("/addProduct", addProduct);
router.put("/editProduct/:code", editProduct);
router.delete("/product/:id_product/:id_user", deleteProduct);

router.post("/transaction", addTransaction);
router.post("/getSales", getSales);

export default router;

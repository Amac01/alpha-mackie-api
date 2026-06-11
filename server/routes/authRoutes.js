// routes/authRoutes.js

import express from "express";
import { register, login, forgotPassword } from "../Controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);

export default router;

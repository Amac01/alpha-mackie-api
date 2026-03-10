import express from "express";
import { protect } from "../middleware/auth.js";
import { createPackage, getMyPackages, approvePackage } from "../Controllers/packageController.js";


const router = express.Router();


router.post("/", protect, createPackage);
router.get("/my", protect, getMyPackages);
router.patch("/:id/approve", protect, approvePackage);

export default router;
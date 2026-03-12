import express from "express";
import { protect } from "../middleware/auth.js";
import { 
    createPackage,
    getMyPackages,
    approvePackage,
    getAllPackages,
    markReceived,
    markShipped,
    markDelivered
 } from "../Controllers/packageController.js";

 
const router = express.Router();


router.post("/", protect, createPackage);
router.get("/my", protect, getMyPackages);
router.patch("/:id/approve", protect, approvePackage);
router.get("/", protect, getAllPackages);
router.patch("/:id/received", protect, markReceived);
router.patch("/:id/shipped", protect, markShipped);
router.patch("/:id/delivered", protect, markDelivered);

export default router;
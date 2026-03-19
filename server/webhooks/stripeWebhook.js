import express from "express";
import Stripe from "stripe";
import Package from "../models/Package.js";

const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// ⚠️ IMPORTANT: raw body (not JSON)
router.post(
  "/stripe",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error("Webhook error:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // 🎯 Handle successful payment
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const packageId = session.metadata.packageId;

      const pkg = await Package.findById(packageId);

      if (pkg) {
        pkg.status = "paid";
        await pkg.save();
      }
    }

    res.json({ received: true });
  }
);

export default router;
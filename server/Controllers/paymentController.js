import Stripe from "stripe";
import Package from "../models/Package.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createCheckoutSession = async (req, res) => {
  try {

    const pkg = await Package.findById(req.body.packageId);

    if (!pkg) {
      return res.status(404).json({ message: "Package not found" });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: pkg.description
            },
            unit_amount: pkg.price * 100
          },
          quantity: 1
        }
      ],
      success_url: "http://localhost:3000/payment-success",
      cancel_url: "http://localhost:3000/payment-cancel"
    });

    res.json({ url: session.url });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
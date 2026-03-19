import "dotenv/config";

import express from "express";
import morgan from "morgan";

import connectDB from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/user.js";
import packageRoutes from "./routes/packageRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import stripeWebhook from "./webhooks/stripeWebhook.js";

const app = express();

// ⚠️ Must come BEFORE express.json()
app.use("/api/webhooks", stripeWebhook);

// Middleware
app.use(express.json());
app.use(morgan("dev"));


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/payments", paymentRoutes);

app.get("/", (req, res) => res.send("ALL SETUP"));

// Connect DB then start server
const PORT = process.env.PORT || 5050;

connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error("DB connection failed:", err.message);
    process.exit(1);
  });
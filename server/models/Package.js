import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  description: {
    type: String,
    required: true
  },

  weight: {
    type: Number,
    required: true
  },

  length: Number,
  width: Number,
  height: Number,

  status: {
    type: String,
    enum: [
      "pending",
      "approved", 
      "received", 
      "shipped", 
      "delivered"
    ],
    default: "pending"
  },

  price: Number,

  createdAt: {
    type: Date,
    default: Date.now
  },
  trackingId: {
    type: String,
    unique: true
  }
});

const Package = mongoose.model("Package", packageSchema);

export default Package;

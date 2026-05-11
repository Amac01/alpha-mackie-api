import Package from "../models/Package.js";


// CREATE PACKAGE
export const createPackage = async (req, res) => {

  console.log("BODY:", req.body);
  console.log("USER:", req.user);

  try {

    const trackingId =
    "LS" + Math.floor(100000 + Math.random() * 900000);
  
  const newPackage = await Package.create({
    ...req.body,
    trackingId,
    userId: req.user.id
  });
  
    res.status(201).json(newPackage);

  } catch (error) {

    console.log("PACKAGE ERROR:", error);

    res.status(500).json({
      message: error.message
    });
  }
};


// GET USER PACKAGES
export const getMyPackages = async (req, res) => {

  try {

    const packages = await Package.find({
      userId: req.user.id
    });

    res.json(packages);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// APPROVE PACKAGE
export const approvePackage = async (req, res) => {

  try {

    const pkg = await Package.findById(req.params.id);

    if (!pkg) {
      return res.status(404).json({
        message: "Package not found"
      });
    }

    pkg.status = "approved";

    if (req.body.price) {
      pkg.price = req.body.price;
    }

    await pkg.save();

    res.json(pkg);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// GET ALL PACKAGES
export const getAllPackages = async (req, res) => {

  try {

    const packages = await Package.find()
      .populate("userId", "name email");

    res.json(packages);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// MARK RECEIVED
export const markReceived = async (req, res) => {

  try {

    const pkg = await Package.findById(req.params.id);

    if (!pkg) {
      return res.status(404).json({
        message: "Package not found"
      });
    }

    pkg.status = "received";

    await pkg.save();

    res.json(pkg);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// MARK SHIPPED
export const markShipped = async (req, res) => {

  try {

    const pkg = await Package.findById(req.params.id);

    if (!pkg) {
      return res.status(404).json({
        message: "Package not found"
      });
    }

    pkg.status = "shipped";

    await pkg.save();

    res.json(pkg);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};


// MARK DELIVERED
export const markDelivered = async (req, res) => {

  try {

    const pkg = await Package.findById(req.params.id);

    if (!pkg) {
      return res.status(404).json({
        message: "Package not found"
      });
    }

    pkg.status = "delivered";

    await pkg.save();

    res.json(pkg);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};

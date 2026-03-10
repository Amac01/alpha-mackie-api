import Package from "../models/Package.js";

export const createPackage = async (req, res) => {
  try {

    const { description, weight, length, width, height } = req.body;

    const newPackage = await Package.create({
      userId: req.user.id,
      description,
      weight,
      length,
      width,
      height
    });

    res.status(201).json(newPackage);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyPackages = async (req, res) => {
  try {

    const packages = await Package.find({
      userId: req.user.id
    });

    res.json(packages);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const approvePackage = async (req, res) => {
  try {

    const { price } = req.body;

    const pkg = await Package.findById(req.params.id);

    if (!pkg) {
      return res.status(404).json({ message: "Package not found" });
    }

    pkg.price = price;
    pkg.status = "approved";

    await pkg.save();

    res.json(pkg);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
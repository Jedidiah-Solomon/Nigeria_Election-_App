require("dotenv").config();
const Admin = require("../models/adminModel");

// Middleware to check if the user is an admin
const requireAdmin = async (req, res, next) => {
  try {
    // Extract firstName from session
    const firstName = req.session?.firstName;

    if (!firstName) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No firstName in session" });
    }

    // Find the admin by firstName
    const admin = await Admin.findOne({ firstName });

    if (!admin) {
      return res.status(401).json({ message: "Unauthorized: Admin not found" });
    }

    // Attach admin data to the request object
    req.admin = admin;

    // Check if the admin has the appropriate role
    if (req.admin.position !== "admin") {
      return res.status(403).json({ message: "Forbidden: Admins only" });
    }

    next(); // Proceed to the next middleware or route handler
  } catch (err) {
    console.error("Authorization error:", err);
    res.status(401).json({ message: "Unauthorized: Authentication error" });
  }
};

module.exports = { requireAdmin };

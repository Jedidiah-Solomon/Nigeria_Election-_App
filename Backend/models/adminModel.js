const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    position: { type: String, required: true },
  },
  { collection: "admin_portal" }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;

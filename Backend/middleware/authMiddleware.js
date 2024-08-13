const { expressjwt: expressJwt } = require("express-jwt");

const SECRET_KEY = process.env.JWT_SECRET;

// Debugging the secret key
console.log("JWT_SECRET:", SECRET_KEY);

const requireAuth = expressJwt({
  secret: SECRET_KEY,
  algorithms: ["HS256"],
  requestProperty: "auth",
  getToken: (req) => {
    const token = req.cookies.jwt;
    console.log("JWT token:", token);
    return token;
  },
});

const requireAdmin = (req, res, next) => {
  if (req.auth && req.auth.position === "admin") {
    next();
  } else {
    res.status(403).json({ message: "Forbidden: Admins only" });
  }
};

module.exports = { requireAuth, requireAdmin };

require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
// const { requireAdmin } = require("./middleware/authMiddleware");

const connectDB = require("./config/db");

const app = express();

// Connect to database
connectDB();

// Home route
app.use("/", require("./routes/homeRoutes"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN || "http://localhost:5000",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

app.use(cookieParser());
app.use(methodOverride("_method"));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      ttl: 1 * 24 * 60 * 60, // 1 day in seconds
    }),
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day in milliseconds
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      httpOnly: true,
    },
  })
);

// Use Morgan for logging
app.use(morgan("dev"));

// Serve static files from Frontend directory
app.use(express.static(path.join(__dirname, "../Frontend")));

// Serve TinyMCE static files
// app.use(
//   "/tinymce",
//   express.static(path.join(__dirname, "node_modules", "tinymce"))
// );

// Routes
app.use("/api/voters", require("./routes/voterRoutes"));
app.use("/api/contestants", require("./routes/contestantRoutes"));
app.use(
  "/api/presidential-elections",
  require("./routes/presidentialElectionRoutes")
);
app.use(
  "/api/governorship-elections",
  require("./routes/governorshipElectionRoutes")
);
app.use("/api/parties", require("./routes/partyRoutes"));
app.use("/api/admin", require("./routes/adminRoutes"));
app.use("/api/utils", require("./routes/utilsRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

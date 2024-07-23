const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");

const connectDB = require("./config/db");

dotenv.config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(methodOverride("_method"));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      ttl: 1 * 24 * 60 * 60, // 1 days in seconds
    }),
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000, // 1 days in milliseconds
      secure: true, // Ensures cookies are only sent over HTTPS
      sameSite: "Strict", // Protects against CSRF
      // domain: '.yourdomain.com', // Replace with your actual domain if need is neccessary
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
app.use("/api/elections", require("./routes/electionRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

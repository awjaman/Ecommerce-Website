import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js"
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

// configure env
dotenv.config(); // if not in root then define the path

// database config

connectDB();

// rest object
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// rest Api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to E-commerce App Mern Stack Project",
  });
});

const PORT = process.env.PORT || 8080;

// run listen

app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});

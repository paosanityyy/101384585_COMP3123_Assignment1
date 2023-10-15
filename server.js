const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users"); // Assuming your user routes are in a separate file
const employeeRoutes = require("./routes/employees"); // Create employee routes in a separate file
const app = express();
const PORT = process.env.PORT || 3000;

const DB_CONNECTION_STRING = "mongodb+srv://paolocasison:abc.123@cluster0.3myz13n.mongodb.net/comp3123_assignment1?retryWrites=true&w=majority"

// Connect to MongoDB
mongoose.connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/emp", employeeRoutes); // Use the correct route for employees

app.route("/")
    .get((req, res) => {
        res.send("<h1>Assignment 1 - 101384585 - Paolo Casison</h1>")
    })
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});

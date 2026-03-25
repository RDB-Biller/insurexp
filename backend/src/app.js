const express = require("express");
const cors = require("cors");

const billingRoutes = require("./routes/billing.routes");
const serviceRoutes = require("./routes/service.routes");
const verificationRoutes = require("./routes/verification.routes");

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/billing", billingRoutes);
app.use("/services", serviceRoutes);
app.use("/verify", verificationRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("InsureXP API running...");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

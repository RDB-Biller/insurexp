const express = require('express');
const router = express.Router();

// ✅ Create bill
router.post('/', (req, res) => {
  const { patientName, subtotal } = req.body;

  if (!patientName || !subtotal) {
    return res.status(400).json({
      error: "Missing patientName or subtotal"
    });
  }

  const bill = {
    id: Date.now(),
    patientName,
    subtotal,
    discount: 0,
    total: subtotal
  };

  res.json({
    message: "Bill created successfully",
    bill
  });
});

module.exports = router;

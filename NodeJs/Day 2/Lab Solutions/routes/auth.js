const express = require("express");
const users = require("../users.json");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  return res.status(200).json({
    message: "Login successful",
    role: user.role,
  });
});

module.exports = router;

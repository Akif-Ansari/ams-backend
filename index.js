// app.js
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
require('./config');
const PORT = 3500;
app.use(express.json());
app.use(cors());

const {LoginSchema} = require('./schema/schemas');
const LoginStudent = mongoose.model('logins',LoginSchema);

// auth.js
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  try {
    const loginstd = await LoginStudent.findOne({ email: email});
    console.log(loginstd);
    // If email id not match
    if (!loginstd) {
      return res.status(404).json({ error: "loginstd not found" });
    }
    const isMatch = password === loginstd.password;
    //  If password not match
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const payload = { loginstd: { id: loginstd.stdId } };
    const token = jwt.sign(payload, "secretkey", { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


// Post API Student details
const {StudentSchema} = require('./schema/schemas');
const student = mongoose.model('students',StudentSchema);
app.get('/studentdetails/:id',async (req,res) => {
  const ID = req.params.id;
  const data = await student.findOne({stdId:ID});
  res.send(data);
})


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

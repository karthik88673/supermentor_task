const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/signup", (req, res) => {

  const { email, password } = req.body;

  // email validation
  if (!email.includes("@") || !email.includes(".")) {
    return res.json({ message: "Invalid Email" });
  }

  // password validation
  if (password.length < 6) {
    return res.json({
      message: "Password must be 6+ characters"
    });
  }

  res.json({
    message: "Signup Successful"
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
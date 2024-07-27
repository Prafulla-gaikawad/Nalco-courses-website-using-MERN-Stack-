const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jswSecret = "iammakingthisonmyown";
const { body, validationResult } = require("express-validator");

router.post(
  "/creatuser",
  body("email").isEmail(),
  body("name").isLength({ min: 5 }),
  body("password", "incorrect password").isLength({ min: 5 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, salt);

    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        password: secPassword,
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/login",
  body("email").isEmail(),
  body("password", "incorrect password").isLength({ min: 5 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;

    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ error: "login with rightest credentials" });
      }
      const pwdCompare = await bcrypt.compare(
        req.body.password,
        userData.password
      );
      if (!pwdCompare) {
        return res.status(400).json({ error: "login with right credentials" });
      }
      const data = {
        user: {
          id: userData.id,
        },
      };
      const authToken = await jwt.sign(data, jswSecret);
      return res.json({ success: true, authToken: authToken });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;

const express = require("express");
const router = express.Router();

router.post("/coursedata", async (req, res) => {
  try {
    console.log(global.courses);
    res.send([global.courses, global.courseCat]);
  } catch (err) {
    console.error(error.message);
    res.send("Server error");
  }
});

module.exports = router;

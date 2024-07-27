const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://prafullasmailid:prafulla123@cluster0.uiavl7h.mongodb.net/Edtech?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");
  } catch (err) {
    console.error("--", err);
  }
};
module.exports = mongoDB;

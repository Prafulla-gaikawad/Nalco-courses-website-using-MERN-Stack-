const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://prafullasmailid:prafulla123@cluster0.uiavl7h.mongodb.net/Edtech?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const fetched_data = await mongoose.connection.db.collection("courses");
    const data = await fetched_data.find({}).toArray();
    const courseCat = await mongoose.connection.db.collection("courseCat");
    const courseCategory = await courseCat.find({}).toArray();

    global.courses = data;
    global.courseCat = courseCategory;
    console.log(global.courses);
    console.log(global.courseCat);

    console.log("connected");
  } catch (err) {
    console.error("--", err);
  }
};
module.exports = mongoDB;

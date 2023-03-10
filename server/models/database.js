
const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.set("strictQuery", false);

  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err, res) {
      try {
        console.log("Connected to Database");
      } catch (err) {
        throw err;
      }
    }
  );
};

module.exports = connectDatabase;
// Models
// require('./Category');
// require('./Recipe');
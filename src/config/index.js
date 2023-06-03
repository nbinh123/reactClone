const mongoose = require("mongoose")

async function db() {

  // connect tới database blog
  try {
    await mongoose.connect('mongodb://127.0.0.1/my_database', {
      dbName: "blog",
      useNewUrlParser: true,
      useUnifiedTopology: true,

    });
    console.log("Connect blog Successfully")
  } catch (error) {
    console.log("Connect blog Failure!")
  }

  // connect tới database collection

}

module.exports = { db };
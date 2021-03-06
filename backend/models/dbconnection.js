// const { MongoClient } = require("mongodb");

// const client = new MongoClient(process.env.URI, { useUnifiedTopology: true });

// module.exports = {
//   client,
// };

const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = {
  connectDB,
};

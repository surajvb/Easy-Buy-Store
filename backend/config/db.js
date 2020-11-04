const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true, // these 3 options has to passed with current version on mongoose
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongo Connected ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Mongo connection failed Error: ${error.message}`.red.underline.bold);
    process.exit(1); // if we pass 1 process will exit with failure
  }
};

module.exports = connectDB;

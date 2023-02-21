import mongoose from "mongoose";

const connectToDB = () => {
  mongoose.set("strictQuery", false);

  mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) => {
      console.log(`connected DB `);
    })
    .catch((err) => {
      console.log(err);
      process.getMaxListeners(1);
    });
};

export default  connectToDB;

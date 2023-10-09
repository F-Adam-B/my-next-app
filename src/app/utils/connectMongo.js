import mongoose from "mongoose";

const connectMongo = async () =>
  mongoose.connect(process.env.MONGO_CONNECTION_STRING);

export const disconnectMongo = () => {
  mongoose.connection.close();
};
export default connectMongo;

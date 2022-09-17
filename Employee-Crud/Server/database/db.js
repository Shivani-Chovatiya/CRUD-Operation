import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URI = `mongodb+srv://${username}:${password}@crud-app.kerexri.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;

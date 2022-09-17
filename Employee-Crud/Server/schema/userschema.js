import mongoose from "mongoose";

import autoincrement from "mongoose-auto-increment";

const useSchema = mongoose.Schema({
  // empid: String,
  name: String,
  dob: Date,
  desg: String,
  org: String,
  gender: String,
  photo: String,
});

autoincrement.initialize(mongoose.connection);
useSchema.plugin(autoincrement.plugin, "user");

const user = mongoose.model("user", useSchema);

export default user;

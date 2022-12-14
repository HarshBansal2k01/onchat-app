import mongoose from "mongoose";

const onchatSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean
});

export default mongoose.model("messageContent", onchatSchema);

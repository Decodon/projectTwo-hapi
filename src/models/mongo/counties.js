import Mongoose from "mongoose";

const { Schema } = Mongoose;

const countiesSchema = Schema({
  name: String,
  province: String,
});

export const Counties = Mongoose.model("Counties", countiesSchema);

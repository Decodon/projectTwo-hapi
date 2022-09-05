import Mongoose from "mongoose";

const { Schema } = Mongoose;

const placemarkersSchema = new Schema({
  lat: String,
  lng: String,
  religion: String,
  explorer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  counties: {
    type: Schema.Types.ObjectId,
    ref: "Counties",
  },
});

export const Placemarkers = Mongoose.model("Placemarkers", placemarkersSchema);

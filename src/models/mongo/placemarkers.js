import Mongoose from "mongoose";

const { Schema } = Mongoose;

const placemarkersSchema = new Schema({
  latitude: Number,
  longitude: Number,
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

export const Placemarkers = Mongoose.model("Placemarkers", PlacemarkersSchema);

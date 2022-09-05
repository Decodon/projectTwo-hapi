import { Placemarkers } from "./placemarkers.js";

export const placemarkersMongoStore = {
  async getAllPlacemarkers() {
    const placemarkers = await Placemarkers.find().populate("explorer").populate("counties").lean();
    return placemarkers;
  },

  async getPlacemarkersByCounties(id) {
    const placemarkers = await Placemarkers.find({ counties: id });
    return placemarkers;
  },

  async placemarkers(lat, lng, religion, explorer, counties) {
    const newPlacemarkers = new Placemarkers({
      lat,
      lng,
      religion,
      explorer: explorer._id,
      counties: counties._id,
    });
    await newPlacemarkers.save();
    return newPlacemarkers;
  },

  async deleteAll() {
    await Placemarkers.deleteMany({});
  },
};

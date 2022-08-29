import { Placemarkers } from "./placemarker.js";

export const placemarkersMongoStore = {
  async getAllPlacemarkers() {
    const placemarkers = await Placemarkers.find().populate("explorer").populate("counties").lean();
    return placemarkers;
  },

  async getPlacemarkersByCounties(id) {
    const placemarkers = await Placemarkers.find({ counties: id });
    return placemarkers;
  },

  async placemarkers(amount, method, donor, candidate) {
    const newDonation = new Donation({
      latitude,
      longitude,
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

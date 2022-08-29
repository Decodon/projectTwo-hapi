import { Counties } from "./counties.js";

export const countiesMongoStore = {
  async getAllCounties() {
    const counties = await Counties.find().lean();
    return counties;
  },

  async findById(id) {
    const counties = await Counties.findOne({ _id: id }).lean();
    return counties;
  },

  async findByName(name) {
    const counties = await Counties.findOne({
      name,
    });
    return counties;
  },
};

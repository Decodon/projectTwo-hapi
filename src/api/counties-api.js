import Boom from "@hapi/boom";
import { Counties } from "../models/mongo/counties.js";

export const countiesApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const counties = await Counties.find();
      return counties;
    },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      try {
        const counties = await Counties.findOne({ _id: request.params.id });
        if (!counties) {
          return Boom.notFound("No County with this id");
        }
        return counties;
      } catch (err) {
        return Boom.notFound("No County with this id");
      }
    },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const newCounties = new Counties(request.payload);
      const counties = await newCounties.save();
      if (counties) {
        return h.response(counties).code(201);
      }
      return Boom.badImplementation("error creating county");
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await Counties.remove({});
      return { success: true };
    },
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const response = await Counties.deleteOne({ _id: request.params.id });
      if (response.deletedCount === 1) {
        return { success: true };
      }
      return Boom.notFound("id not found");
    },
  },
};

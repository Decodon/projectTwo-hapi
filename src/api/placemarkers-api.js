import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const placemarkersApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const placemarkers = db.placemarkerstore.getAllPlacemarkers();
      return placemarkers;
    },
  },
  findByCounties: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const placemarkers = await db.placemarkerstore.getPlacemarkersByCounties(request.params.id);
      return placemarkers;
    },
  },

  makeDonation: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const counties = await db.countiesStore.findById(request.params.id);
      if (!counties) {
        return Boom.notFound("No Counties with this id");
      }
      const donation = await db.placemarkerstore.donate(request.payload.amount, request.payload.method, request.auth.credentials, counties);
      return donation;
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.placemarkerstore.deleteAll();
      return { success: true };
    },
  },
};
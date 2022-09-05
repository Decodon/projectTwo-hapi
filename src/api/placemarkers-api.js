import Boom from "@hapi/boom";
import { db } from "../models/db.js";

export const placemarkersApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const placemarkers = db.placemarkersStore.getAllPlacemarkers();
      return placemarkers;
    },
  },
  findByCounties: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const placemarkers = await db.placemarkersStore.getPlacemarkersByCounties(request.params.id);
      return placemarkers;
    },
  },

  makePlacemarkers: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      const counties = await db.countiesStore.findById(request.params.id);
      if (!counties) {
        return Boom.notFound("No Counties with this id");
      }
      const placemarkers = await db.placemarkersStore.placemarkers(request.payload.lat, request.payload.lng, request.payload.religion, request.auth.credentials, counties);
      return placemarkers;
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request, h) {
      await db.placemarkersStore.deleteAll();
      return { success: true };
    },
  },
};

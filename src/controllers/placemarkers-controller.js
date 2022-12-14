import { db } from "../models/db.js";

export const placemarkersController = {
  index: {
    handler: async function (request, h) {
      const counties = await db.countiesStore.getAllCounties();
      return h.view("Placemarkers", { title: "Enter a Placemarker", counties: counties });
    },
  },
  report: {
    handler: async function (request, h) {
      const placemarkers = await db.placemarkersStore.getAllPlacemarkers();
      return h.view("Report", {
        title: "Placemarkers to Date",
        placemarkers: placemarkers,
      });
    },
  },
  placemarkers: {
    handler: async function (request, h) {
      try {
        const loggedInUser = request.auth.credentials;
        const rawCounties = request.payload.counties.split(",");
        const counties = await db.countiesStore.findByName(rawCounties[0], rawCounties[1]);
        await db.placemarkersStore.placemarkers(request.payload.latitude, request.payload.longitude, request.payload.religion, loggedInUser._id, counties._id);
        return h.redirect("/report");
      } catch (err) {
        console.log(err.message);
        return h.view("main", { errors: [{ message: err.message }] });
        console.log(err);
      }
    },
  },
};

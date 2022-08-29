import { userMongoStore } from "./mongo/user-mongo-store.js";
import { donationMongoStore } from "./mongo/donation-mongo-store.js";
import { candidateMongoStore } from "./mongo/candidate-mongo-store.js";
import { countiesMongoStore } from "./mongo/counties-mongo-stores.js";
import { placemarkersMongoStore } from "./mongo/placemarkers-mongo-stores.js";
import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,
  donationStore: null,
  candidateStore: null,
  countiesMongoStore: null,
  placemarkersMongoStore: null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.donationStore = donationMongoStore;
        this.candidateStore = candidateMongoStore;
        this.countiesStore = countiesMongoStore;
        this.placemarkersStore = placemarkersMongoStore;
        connectMongo();
        break;
      default:
    }
  },
};

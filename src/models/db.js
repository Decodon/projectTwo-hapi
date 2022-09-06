import { userMongoStore } from "./mongo/user-mongo-store.js";
import { countiesMongoStore } from "./mongo/counties-mongo-stores.js";
import { placemarkersMongoStore } from "./mongo/placemarkers-mongo-stores.js";
import { connectMongo } from "./mongo/connect.js";

export const db = {
  userStore: null,
  countiesMongoStore: null,
  placemarkersMongoStore: null,

  init(storeType) {
    switch (storeType) {
      case "mongo":
        this.userStore = userMongoStore;
        this.countiesStore = countiesMongoStore;
        this.placemarkersStore = placemarkersMongoStore;
        connectMongo();
        break;
      default:
    }
  },
};

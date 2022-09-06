import { assert } from "chai";
import { placemarkersService } from "./placemarkers-service.js";
import { maggie, testCounties, testPlacemarkers } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Placemarkers API tests", () => {
  setup(async () => {
    await placemarkersService.createUser(maggie);
    await placemarkersService.authenticate(maggie);
    await placemarkersService.deleteAllUsers();
    await placemarkersService.createUser(maggie);
    await placemarkersService.authenticate(maggie);
  });
  teardown(async () => {
    await placemarkersService.deleteAllUsers();
  });

  test("create a placemarker", async () => {
    const returnedCounties = await placemarkersService.createCounties(testCounties[0]);
    await placemarkersService.makePlacemarkers(returnedCounties._id, testPlacemarkers[0]);
    const returnedPlacemarkers = await placemarkersService.getPlacemarkers(returnedCounties._id);
    assert.equal(returnedPlacemarkers.length, 1);
    assertSubset(returnedPlacemarkers[0], testPlacemarkers[0]);
  });
});

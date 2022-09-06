import { assert } from "chai";
import { assertSubset } from "../test-utils.js";
import { placemarkersService } from "./placemarkers-service.js";
import { maggie, maggieCredentials, testUsers } from "../fixtures.js";
import { db } from "../../src/models/db.js";

const users = new Array(testUsers.length);

suite("User API tests", () => {
  setup(async () => {
    placemarkersService.clearAuth();
    await placemarkersService.createUser(maggie);
    await placemarkersService.authenticate(maggieCredentials);
    await placemarkersService.deleteAllUsers();
    for (let i = 0; i < testUsers.length; i += 1) {
      // eslint-disable-next-line no-await-in-loop
      users[0] = await placemarkersService.createUser(testUsers[i]);
    }
    await placemarkersService.createUser(maggie);
    await placemarkersService.authenticate(maggieCredentials);
  });
  teardown(async () => {});

  test("create a user", async () => {
    const newUser = await placemarkersService.createUser(maggie);
    assertSubset(maggie, newUser);
    assert.isDefined(newUser._id);
  });

  test("delete all user", async () => {
    let returnedUsers = await placemarkersService.getAllUsers();
    assert.equal(returnedUsers.length, 4);
    await placemarkersService.deleteAllUsers();
    await placemarkersService.createUser(maggie);
    await placemarkersService.authenticate(maggieCredentials);
    returnedUsers = await placemarkersService.getAllUsers();
    assert.equal(returnedUsers.length, 1);
  });

  test("get a user", async () => {
    const returnedUser = await placemarkersService.getUser(users[0]._id);
    assert.deepEqual(users[0], returnedUser);
  });

  test("get a user - bad id", async () => {
    try {
      const returnedUser = await placemarkersService.getUser("1234");
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 503);
    }
  });

  test("get a user - deleted user", async () => {
    await placemarkersService.deleteAllUsers();
    await placemarkersService.createUser(maggie);
    await placemarkersService.authenticate(maggieCredentials);
    try {
      const returnedUser = await placemarkersService.getUser(users[0]._id);
      assert.fail("Should not return a response");
    } catch (error) {
      assert(error.response.data.message === "No User with this id");
      assert.equal(error.response.data.statusCode, 404);
    }
  });
});

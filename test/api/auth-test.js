import { assert } from "chai";
import { placemarkersService } from "./placemarkers-service.js";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { maggie } from "../fixtures.js";

suite("Authentication API tests", async () => {
  setup(async () => {
    placemarkersService.clearAuth();
    await placemarkersService.createUser(maggie);
    await placemarkersService.authenticate(maggie);
    await placemarkersService.deleteAllUsers();
  });

  test("authenticate", async () => {
    const returnedUser = await placemarkersService.createUser(maggie);
    const response = await placemarkersService.authenticate(maggie);
    assert(response.success);
    assert.isDefined(response.token);
  });

  test("verify Token", async () => {
    const returnedUser = await placemarkersService.createUser(maggie);
    const response = await placemarkersService.authenticate(maggie);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });

  test("check Unauthorized", async () => {
    placemarkersService.clearAuth();
    try {
      await placemarkersService.deleteAllUsers();
      assert.fail("Route not protected");
    } catch (error) {
      assert.equal(error.response.data.statusCode, 401);
    }
  });
});

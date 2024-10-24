const request = require("supertest");
const server = require("../index");
const affirmations = require("../assets/affirmations");

describe("GET Affirmation Endpoints", () => {
  it("should return a random affirmation", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toEqual(200);
    expect(affirmations.en).toContain(res.body["affirmation"]);
  });
});

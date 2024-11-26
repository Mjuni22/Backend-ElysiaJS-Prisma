import { describe, expect, it } from "bun:test";
import { Elysia } from "elysia";

describe("Elysia", () => {
  it("should return a response from /sensor", async () => {
    const app = new Elysia().get("/sensor", () => "Hallo");
    const response = await app
      .handle(new Request("https://backend-elysiajs.up.railway.app/sensor/"))
      .then((res) => res.text());
    expect(response).toBe("Hallo");
  });

  it("should return 404 endpoint", async () => {
    const app = new Elysia().get("/sensor", () => "Hallo Elysia");
    const response = await app
      .handle(new Request("https://backend-elysiajs.up.railway.app/null"))
      .then((res) => res.status);
    expect(response).toBe(404);
  });
});

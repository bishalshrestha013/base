import { describe, expect, it } from "vitest";
import JodNumbers from "./index";

describe("index", () => {
  it("should return addition to two numbers", () => {
    expect(JodNumbers(2, 3)).toBe(5);
  });
});

import { expect } from "chai";
import poolOrder from "../pool-order.json";

function parseJson(json: string) {
  try {
    return JSON.parse(json);
  } catch (error) {
    return null;
  }
}

describe("Valid pool order array", () => {
  it("Parse pool order as an array", async () => {
    const poolsOrderStr = JSON.stringify(poolOrder);
    const poolsOrdering = parseJson(poolsOrderStr);

    expect(poolsOrdering, "Invalid JSON format").not.null;
    expect(Array.isArray(poolsOrdering), "Not an array").to.be.true;
  });
});

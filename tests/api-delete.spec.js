import { test, expect } from "@playwright/test";

test("DELETE API Test", async ({ request }) => {
  const response = await request.delete(
    "https://jsonplaceholder.typicode.com/users/1",
  );

  console.log("Status:", response.status());

  expect(response.status()).toBe(200);
});

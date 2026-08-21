import { test, expect } from "@playwright/test";

test("GET API - Query Parameter Test", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users",
    {
      params: {
        _limit: 5,
      },
    },
  );

  console.log("Status:", response.status());

  const responseBody = await response.json();

  console.log(responseBody);

  expect(response.status()).toBe(200);
  expect(responseBody.length).toBe(5);
});

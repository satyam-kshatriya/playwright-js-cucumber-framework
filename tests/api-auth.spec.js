import { test, expect } from "@playwright/test";

test("API Authentication - Token Reuse", async ({ request }) => {
  // Step 1: Login API
  const loginResponse = await request.post("https://dummyjson.com/auth/login", {
    data: {
      username: "emilys",
      password: "emilyspass",
    },
  });

  expect(loginResponse.status()).toBe(200);

  // Step 2: Get token from login response
  const loginBody = await loginResponse.json();

  const token = loginBody.accessToken;

  console.log("Token received:", !!token);

  expect(token).toBeTruthy();

  // Step 3: Use token in another API
  const response = await request.get("https://dummyjson.com/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log("Status:", response.status());

  const responseBody = await response.json();

  console.log(JSON.stringify(responseBody, null, 2));

  // Step 4: Validate protected API
  expect(response.status()).toBe(200);
});

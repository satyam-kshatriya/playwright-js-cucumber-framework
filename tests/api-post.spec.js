import { test, expect } from "@playwright/test";

test("POST API Test", async ({ request }) => {
  const requestBody = {
    name: "Satyam",
    username: "satyam123",
    email: "satyam@example.com",
  };

  const response = await request.post(
    "https://jsonplaceholder.typicode.com/users",
    {
      data: requestBody,
    },
  );

  console.log("Status:", response.status());

  const responseBody = await response.json();

  console.log(JSON.stringify(responseBody, null, 2));

  expect(response.status()).toBe(201);

  expect(responseBody.name).toBe("Satyam");
  expect(responseBody.username).toBe("satyam123");
  expect(responseBody.email).toBe("satyam@example.com");

  expect(responseBody.id).toBeTruthy();
});

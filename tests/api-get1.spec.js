// https://jsonplaceholder.typicode.com/users"

const { test, expect } = require("@playwright/test");
const ajv = require("ajv");
test("Get Request test", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/",
    {
      params: {
        _limit: 1,
      },
    },
  );

  const responseBody = await response.json();

  console.log(response.status());
  expect(response.status()).toBe(200);
  console.log(responseBody);
  console.log(responseBody.length);
  expect(responseBody.length).toBe(1);
  console.log(responseBody[0].id);

  //code for schema validation

  // 4. Define expected schema
  const schema = {
    type: "array",

    items: {
      type: "object",

      required: ["id", "name", "username", "email"],

      properties: {
        id: {
          type: "number",
        },

        name: {
          type: "number",
        },

        username: {
          type: "string",
        },

        email: {
          type: "string",
        },
      },
    },
  };

  const ajv1 = new ajv();
  const validate = ajv1.compile(schema);
  const valid = validate(responseBody);
  console.log("schema validation", valid);
  // expect(valid).toBe("true");
});

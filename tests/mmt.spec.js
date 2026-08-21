const { test, expect } = require("@playwright/test");
test("test case of mmt", async ({ page }) => {
  await page.goto("http://www.amazon.in/");
  // await page.pause();

  await page.getByRole("button", { name: "Continue shopping" }).click();
  await expect(page.locator("[aria-label='Search Amazon.in']")).toBeVisible();
  // await page.pause();

  await page.locator("[aria-label='Search Amazon.in']").fill("mobile");
  await page.locator("[aria-label='Search Amazon.in']").press("Enter");
  await page.pause();
  const locator1 = await page.locator(".puisg-col-inner");
  const count1 = await locator1.count();
  //console.log(count1);

  const locator2 = page
    .locator(".puisg-col-inner")
    .filter({ hasText: "Samsung" })
    .filter({ hasText: "Mobile" });
  // .locator(".puis-price-instruct");

  const count2 = await locator2.count();
  console.log("all mobile count is coming from count2: " + count2);
  const text2 = await locator2.allTextContents();
  console.log(text2);

  //print price of above phone
  const locator3 = locator2.locator(".a-price-whole");
  //const priceLocator = locator1.locator(".puis-price-instruct");
  const count3 = await locator3.count();
  page.pause();
  console.log("all price count for mobiles coming from count3", +count3);
  const text3 = await locator3.allTextContents();
  // page.pause();
  console.log(text3);
  // page.pause();\
  for (let i = 0; i < count3; i++) {
    const text = await locator2.nth(i).locator("h2").innerText();
    console.log(text);
    const textprice = await locator3.nth(i).innerText();
    console.log("price for mobile in last loop: " + textprice);
  }
});

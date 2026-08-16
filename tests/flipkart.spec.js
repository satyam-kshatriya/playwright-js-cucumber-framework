const { test, expect } = require("@playwright/test");
test("flipkart test case", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");

  await page.getByRole("button", { name: "✕" }).click();

  const overlay = page.locator("div.mcO4kT.RFBkxv");

  console.log(await page.locator("span.v1zwn27").getByText("Login").count());
  //await page.locator("span.v1zwn27").getByText("Login").click();

  //search mobile

  console.log(await page.locator(".nw1UBF.v1zwn25[name='q']").nth(0).count());

  const searchBox = await page.locator(".nw1UBF.v1zwn25[name='q']").nth(0);
  await searchBox.fill("mobile");
  await searchBox.press("Enter");

  //get list of all mobile titles in list
  const mobileProducts = page.locator(".RG5Slk");

  // Assertion
  await expect(mobileProducts).not.toHaveCount(0);
  console.log("RG5Slk count:", await page.locator(".RG5Slk").count());
  const mobiles = await page.locator(".RG5Slk").allTextContents();
  console.log(mobiles);
  const realmemobileonly = await page.getByText("realme").allTextContents();
  console.log(realmemobileonly);
  //realme P4 Pro 5G
  const exactrealmephone = await page
    .locator(".ZFwe0M:has-text('realme P4')")
    .allTextContents();
  console.log(exactrealmephone);

  const exactrealmephoneprice = await page
    .locator(".ZFwe0M:has-text('realme P4')")
    .locator(".hZ3P6w")
    .allTextContents();
  console.log(exactrealmephoneprice);
});

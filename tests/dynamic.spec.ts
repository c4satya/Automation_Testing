import {test,expect} from '@playwright/test';


test('title1', async ({page})=>{
    await page.goto('https://demoqa.com/dynamic-properties');
    const dynamicText= await page.getByText('This text has random Id');
    await expect(dynamicText).toBeVisible();
    
});

test('title2', async ({page})=>{
    await page.goto('https://demoqa.com/dynamic-properties');
    const enableAfterButton= await page.locator('#enabledAfter');
    await expect(enableAfterButton).toBeEnabled({timeout:10000});
    await enableAfterButton.click();
    
});

//title3    
test('title3', async ({page})=>{
    await page.goto('https://demoqa.com/dynamic-properties');
    const colorChangeButton= await page.locator('#colorChange');
    await expect(colorChangeButton).toHaveClass(/text-danger/,{timeout:10000});
    await colorChangeButton.click();
    
}); 


// test.describe('Dynamic Properties', () => {
//     test('title1', async ({page})=>{
//         await page.goto('https://demoqa.com/dynamic-properties');
//         const dynamicText= await page.getByText('This text has random Id');
//         await expect(dynamicText).toBeVisible();
        
//     });

//     test('title2', async ({page})=>{
//         await page.goto('https://demoqa.com/dynamic-properties');
//         const enableAfterButton= await page.locator('#enabledAfter');
//         await expect(enableAfterButton).toBeEnabled({timeout:10000});
//         await enableAfterButton.click();
        
//     });  

test("Login Test", {tag: "@smoke"}, async ({ page }) => {
    await test.step("Navigate to the login page", async () => {
      await page.goto("https://demoqa.com/login");
    });
    
    await test.step("Fill in the login form or enter credentials", async () => {
      await page.fill("#userName", "satya");
      await page.fill("#password", "Password@123");
    }); 
    await test.step("Click the login button", async () => {
      await page.click("#login");
    });
    await test.step("Verify successful login", async () => {
      await expect(page.locator("#userName-value")).toHaveText("satya");
    });
 
  });




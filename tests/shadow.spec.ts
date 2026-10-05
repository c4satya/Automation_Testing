import {test,expect} from '@playwright/test';


test('Test Shadow DOM using user facing locators',async ({page})=>{
    await page.goto('https://practice.expandtesting.com/shadowdom');
    const shadowButton= await page.getByRole('button',{name:'This button is inside a Shadow DOM.'});
    await expect(shadowButton).toBeVisible();

});

//shadow host + child element
test('Test Shadow DOM using shadow host + child element',async ({page})=>{
    await page.goto('https://practice.expandtesting.com/shadowdom');
    const shadowHost=await page.locator('#shadow-host');
    const shadowButton=await shadowHost.locator('button');
    await expect(shadowButton).toBeVisible();
});


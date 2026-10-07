import { Given, When, Then } from '@cucumber/cucumber';
import { chromium,expect } from '@playwright/test';
import { Before,After } from '@cucumber/cucumber';

import users from '../../utils/multicredential.json'

Before(async function () {
  this.browser = await chromium.launch({channel:'chrome',headless:false});
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  console.log("===========Browser is Launched===========");
});
After(async function () {
    await this.browser.close();
    console.log("===========Browser is closed===========");
})

Given('user is on the login page',{timeout: 5000}, async function () {
  // Write code here that turns the phrase above into concrete actions
  const browser = await chromium.launch({channel:'chrome',headless:false});
  const context = await browser.newContext();
  const page = await context.newPage();
  await this.page.goto('https://www.saucedemo.com/');
});
 
When('user logs in with valid credentials {string} and {string}', async function (username, password) {
  // Write code here that turns the phrase above into concrete actions
  await this.page.locator('[data-test="username"]').fill(username);
  await this.page.locator('[data-test="password"]').fill(password);
  await this.page.locator('[data-test="login-button"]').click();
});

When('user logs in using credentials from {string}', async function (filename:string){
    for( const user of users)
    {
        await this.page.goto("https://www.saucedemo.com");
        await this.page.locator('[data-test="username"]').fill(user.username);
        await this.page.locator('[data-test="password"]').fill(user.password);
        await this.page.locator('[data-test="login-button"]').click();
    }
})


Then('Verify Dashboard page is loaded successfully', async function () {
  // Write code here that turns the phrase above into concrete actions
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
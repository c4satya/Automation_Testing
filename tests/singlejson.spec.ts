import {test,expect} from '@playwright/test';
import data from '../utils/credentials.json';

test("Login to saucedemo with multiple credentials",async({page})=>{
    for(const credential of data){
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill(credential.username);
        await page.locator('[data-test="password"]').fill(credential.password);
        await page.locator('[data-test="login-button"]').click();
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.locator('#react-burger-menu-btn').click();
        await page.locator('#logout_sidebar_link').click();
    }
}); 
import {test, expect} from '@playwright/test';
import data from '../utils/multicredential.json';

//test with multiple credentials
for(const user of data){
   
    test(`Login to saucedemo with ${user.username}`,async({page})=>{
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill(user.username);
        await page.locator('[data-test="password"]').fill(user.password);
        await page.locator('[data-test="login-button"]').click();
        if(user.expect === "success"){
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            await page.locator('#react-burger-menu-btn').click();
            await page.locator('#logout_sidebar_link').click();
        }else{
            await expect(page.locator('[data-test="error"]')).toBeVisible();
        }
    });
}
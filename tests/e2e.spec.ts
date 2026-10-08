import {test,expect} from '@playwright/test';

test("SauceDemo End to End Flow",async({page})=>{
    //Login
    await page.goto("https://www.saucedemo.com/");
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    //verify prodduct

    await expect(page.locator('.title')).toHaveText("Products");

    //add products
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();


    //open the cart

    await page.locator('.shopping_cart_link').click();

    //verify the cart
    await expect(page.locator(".inventory_item_name")).toHaveText('Sauce Labs Backpacks');

    //Checkout
    await page.locator('#checkout').click();

    //enter costumer details

    await page.locator('#first-name').fill("Chandan Kumar");
    await page.locator('#last-name').fill("Prajapati");

    await page.locator('#postal-code').fill('400016');

    await page.locator('#continue').click();

    //verify checkout overview
    await expect(page.locator('.title')).toHaveText('Checkout: Overview');

    //finish order

    await page.locator('#finish').click();

    //verify order completion

    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');



    
});
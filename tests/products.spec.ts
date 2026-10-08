import {test,expect} from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import {ProductPage} from '../pages/ProductPage'

test("Product validation", async ({page})=>{
    const loginPage= new LoginPage(page);
    const productPage = new ProductPage(page);
    await loginPage.open();

    await loginPage.login('standard_user','secret_sauce');

    // Assertions
    await expect(productPage.pageTitle).toHaveText('Products');
    




    //add products
    await productPage.addBackpackToCart();
  


    //open the cart
    await productPage.openCart();


})
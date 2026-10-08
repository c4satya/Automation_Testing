import {test,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { ProductPage } from "../pages/ProductPage"
import { CartPage } from "../pages/CartPage"



test("Cart Validation", async ({page})=>{
    const loginPage= new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage= new CartPage(page);
    await loginPage.open();

    await loginPage.login('standard_user','secret_sauce');

    // Assertions
    //await expect(productPage.pageTitle).toHaveText('Products');
    
    //add products
    await productPage.addBackpackToCart();
  
    //open the cart
    await productPage.openCart();
    
    //verify cart product
    await expect(cartPage.cart_product).toHaveText('Sauce Labs Backpack');

    //Checkout
    await cartPage.checkoutProceed();

    //enter costumer details
    await cartPage.customerDetails("Chandan Kumar","Prajapati",400016)
    

    await cartPage.continueBtn.click();

    //verify checkout overview
    await expect(cartPage.title).toHaveText('Checkout: Overview');

    //finish order

    await cartPage.finishOrder();

    //verify order completion

    await expect(cartPage.endMessage).toHaveText('Thank you for your order!');


})
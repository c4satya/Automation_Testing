import {Page} from '@playwright/test';

export class ProductPage{
    readonly page:Page;
    readonly pageTitle;
    readonly cartIcon;
    readonly backpack;

    constructor(page:Page){
        this.page=page;
        this.pageTitle=page.locator('.title');
        this.cartIcon=page.locator('.shopping_cart_link');
        this.backpack=page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    }

    async addBackpackToCart(){
        await this.backpack.click();
    }

    async addProductToCart(product:string){
        await this.page.locator(`[data-test="add-to-cart-sauce-labs-${product}"]`).click();
    }

    async openCart(){
        await this.cartIcon.click();
    }


}
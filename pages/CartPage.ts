import {Page} from '@playwright/test';
export class CartPage{
readonly page:Page;
readonly cart_product;
readonly checkout_button;
readonly first_name;
readonly last_name;
readonly postal_code;
readonly continueBtn;
readonly title;
readonly finishBtn;
readonly endMessage;

constructor(page:Page){
    this.page=page;
    this.cart_product =page.locator('.inventory_item_name');
    this.checkout_button=page.locator('#checkout');
    this.first_name=page.locator('#first-name');
    this.last_name= page.locator('#last-name');
    this.postal_code=page.locator('#postal-code');
    this.continueBtn=page.locator('#continue');
    this.title=page.locator('.title');
    this.finishBtn= page.locator('#finish')
    this.endMessage= page.locator('.complete-header');
}

async customerDetails(firstName:string,lastName:string,postalcode:number){
    await this.first_name.fill(firstName);
    await this.last_name.fill(lastName);
    await this.postal_code.fill(postalcode+'');

}
async checkoutProceed(){
    await this.checkout_button.click();
}

async finishOrder(){
    await this.finishBtn.click();
}

}
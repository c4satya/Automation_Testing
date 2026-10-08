import { Page } from "@playwright/test";
export class LoginPage{
    readonly page:Page;
    readonly username;
    readonly password;
    readonly loginButton;

    constructor(page:Page){
        this.page=page;
        this.username =page.locator('#user-name');
        this.password=page.locator('#password');
        this.loginButton=page.locator('#login-button');
    }
    async open(){
         await this.page.goto("https://www.saucedemo.com/");
    }

    async login(username:string,password:string){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
    }
}
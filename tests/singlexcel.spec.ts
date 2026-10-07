import {test, expect} from '@playwright/test';
//need to install xlsx
import * as XLSX from 'xlsx';

//read the excel file
//single credential from excel file
//const workbook = XLSX.readFile('./utils/credentials.xlsx');

//multiple credentials from excel file
const workbook = XLSX.readFile('./utils/miltiCredential.xlsx');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

//parse the excel data
const data = XLSX.utils.sheet_to_json(sheet) as Array<{
username: string, 
password: string
}>; 
//? we are defining the type of records as an array of objects with username and password properties

//test with single credential from excel file
for(const user of data){
   
    test(`Login to saucedemo with ${user.username} from excel`,async({page})=>{
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill(user.username);
        await page.locator('[data-test="password"]').fill(user.password);
        await page.locator('[data-test="login-button"]').click();
        if(user.username === "standard_user" || user.username === "performance_user"){
            await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
            await page.locator('#react-burger-menu-btn').click();
            await page.locator('#logout_sidebar_link').click();
        }else{
            await expect(page.locator('[data-test="error"]')).toBeVisible();
        }
    });
}               
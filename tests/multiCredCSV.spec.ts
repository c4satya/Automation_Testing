import {test, expect} from '@playwright/test';
//import data from '../utils/multicredential.json';
import {parse} from 'csv-parse/sync';
import fs from 'fs';

//read the csv file
const csvFilePath = 'utils/multiCred.csv';
const csvData = fs.readFileSync(csvFilePath, 'utf-8');

//parse the csv data    
const data = parse(csvData, {
    columns: true,
    skip_empty_lines: true
}) as Array<{username: string, password: string}>; //? we are defining the type of records as an array of objects with username and password properties



//test with multiple credentials from csv file
for(const user of data){
   
    test(`Login to saucedemo with ${user.username} from csv`,async({page})=>{
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
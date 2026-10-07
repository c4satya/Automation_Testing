import {test, expect} from '@playwright/test';

//for data driven testing csv we need to install csv-parse
import {parse} from 'csv-parse/sync';
import fs from 'fs'; //? why we are importing fs module? because we need to read the csv file

//read the csv file
const csvFilePath = 'utils/credentials.csv';
const csvData = fs.readFileSync(csvFilePath, 'utf-8');

//parse the csv data
const data = parse(csvData, {
    columns: true,
    skip_empty_lines: true
}) as Array<{username: string, password: string}>; //? we are defining the type of records as an array of objects with username and password properties

//test with single credential
test("Login to saucedemo with single credential",async({page})=>{   
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill(data[0].username);
    await page.locator('[data-test="password"]').fill(data[0].password);
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.locator('#react-burger-menu-btn').click();
    await page.locator('#logout_sidebar_link').click();
});


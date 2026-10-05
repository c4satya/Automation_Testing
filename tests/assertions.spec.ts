import {test,expect} from '@playwright/test';

test('page assertions example',async({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page).toHaveURL('https://www.saucedemo.com/'); 

    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();
    //add pause to see the result of the test       
    //await page.pause();
    // ...existing code...

// Wait 2 seconds
///await page.waitForTimeout(2000);

// ...existing code...
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    //await expect(page).toHaveURL(/inventory/); //case sensitive
    //await expect(page).toHaveURL(/inventory/i);//case insensitive
})

test('Locators state assertions example',async({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    

    const username = page.locator('#user-name');
    const password= page.locator('#password');
    const loginbutton= page.locator('#login-button');

    //add pause to see the result
    await expect(username).toBeVisible();
    await expect(username).toBeEditable();
    await expect(username).toBeEmpty();
    await expect(password).not.toBeDisabled();
    await expect(loginbutton).toBeEnabled();
//25 min

});

test('Locator content and text Assetions Example', async ({page}) =>{
            await page.goto('https://saucedemo.com/');
            await page.locator('#user-name').fill('standard_user');
            await page.locator('#password').fill('secret_sauce');
            await page.locator('#login-button').click();

            const titleHeader= page.locator('.title');
            await expect(titleHeader).toHaveText("Products");
            await expect(titleHeader).toContainText("Prod");//case sensative
            await expect(titleHeader).toContainText('prod',{ignoreCase:true});

            const searchOrFilter= page.locator('.product_sort_container');
            //searchOrFilter.click();
            await searchOrFilter.selectOption('hilo');//high to low price
            page.pause()
            //await searchOrFilter.selectOption({index:2});
            //await searchOrFilter.selectOption({label:'Price(high to low)'});
            await expect(searchOrFilter).toHaveValue('hilo');


});

test('DemoQA Radio Button Selection Assertions',async ({page})=>{
    await page.goto('https://demoqa.com/radio-button/');
    //await page.locator('#user-name').fill('standard_user');
           // await page.locator('#password').fill('secret_sauce');
           // await page.locator('#login-button').click();
    const yesRadioButton=page.locator('#yesRadio');
    const impressiveRadioButton= page.locator('#impressiveRadio');
    const outputResult= page.locator('.text-success');

    await expect(yesRadioButton).not.toBeChecked();
    await expect(impressiveRadioButton).not.toBeChecked();
    await page.pause();
    await page.locator('label[for="yesRadio"]').click();
    await expect(yesRadioButton).toBeChecked();
    await expect(outputResult).toHaveText('Yes');
     await page.locator('label[for="impressiveRadio"]').click();
    await page.pause();
    await expect(impressiveRadioButton).toBeChecked();
    await expect(yesRadioButton).not.toBeChecked();
    await expect(outputResult).toHaveText("Impressive");



});


test('DemoQA Practice form Checkbox Assertions',  async ({page})=>{
     await page.goto('https://demoqa.com/automation-practice-form/');
     const sportsCheckbox= page.locator('#hobbies-checkbox-1');//sport
     const readingCheckbox = page.locator('#hobbies-checkbox-2');//reading
     await page.pause();

    await expect(sportsCheckbox).not.toBeChecked();
    await expect(readingCheckbox).not.toBeChecked();
    await page.locator('label[for="hobbies-checkbox-1"]').click();
    await expect(sportsCheckbox).toBeChecked();
    await expect(readingCheckbox).not.toBeChecked();

    await page.locator('label[for="hobbies-checkbox-2"]').click();
    await expect(sportsCheckbox).toBeChecked();
    await expect(readingCheckbox).toBeChecked();

});

//generic. assertions

test('Generic Value Assertions Example', async ({page}) =>{
            await page.goto('https://saucedemo.com/');
            await page.locator('#user-name').fill('standard_user');
            await page.locator('#password').fill('secret_sauce');
            await page.locator('#login-button').click();
            const itemCount=await page.locator('.inventory_item').count();
            expect(itemCount).toBe(6);
            expect(itemCount).toBeGreaterThan(0);
            //toBeTruthy,toBeFalsy
            expect(itemCount).toBeTruthy();
            //for empty string it should be falsy

           


            



});

 //soft assertion and hard asseertioon
test('Soft Assetion Example',async ({page})=>{
    await page.goto('https://saucedemo.com/');
            await page.locator('#user-name').fill('standard_user');
            await page.locator('#password').fill('secret_sauce');
            await page.locator('#login-button').click();

    //Soft Assertions
    await expect.soft(page).toHaveURL('https://saucedemo.com/inventory.html') ;
    await expect.soft(page.locator('.title')).toHaveText('Products');
    const itemCount=await page.locator('.inventory_item').count();
    expect.soft(itemCount).toBe(6);
    expect.soft(itemCount).toBeGreaterThan(0);
    console.log('Item Count : ',itemCount); 
});


//test right click

test("Right Click", async({page})=>{
await page.goto('https://demoqa.com/buttons/');
await page.locator('#rightClickBtn').click({button:'right'});
await expect(page.locator('#rightClickMessage')).toContainText("You have done a right click");
});


test("Double Click", async({page})=>{
await page.goto('https://demoqa.com/buttons/');
await page.locator('#doubleClickBtn').dblclick();
await expect(page.locator('#doubleClickMessage')).toContainText("You have done a double click");
});


test.only("Drag and Drop using dragTo on DemoQA",async ({page})=>{
    await page.goto('https://qaplayground.com/practice/drag-drop');
    const source = page.getByTestId('dd-item');
    const  target = page.getByTestId('dd-drop-zone');
    await page.pause();
    await source.dragTo (target);
    await expect(target).toContainText('Item dropped');
    await page.pause();

    await page.screenshot({path:'screenshots/dragdrop.png',/*fullPage:true**/});
})
//scrollIntoViewNeeded()
//hover()
//global timeee out in config file
/*import {defineConfig} from '@playwright/test';
export default defineConfig({
    timeout: 60000,
    expect: {
        timeout: 10000
    }
});*/
//not recommended -- only for debugging purpose

//await page.waitForTimeout(5000); //wait for 5 seconds


//keyboard actions
test('Keyboard Actions Example',async ({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.locator('#userName').fill('John Doe');
    await page.keyboard.press('Tab');
    await page.keyboard.insertText('playwright@123.com');
    await page.pause();
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
    await page.pause();
});


//screenshot



import {test, expect} from '@playwright/test';

test('Alert Handling', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');
    //await page.pause();
    //handling alert
   
    await page.locator('#alertButton').click();
     page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    });

    //handling confirm alert
      await page.locator('#confirmButton').click();
    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.dismiss();
    });
  
    
   
   
    
    // triggering the alert that takes 5 seconds to appear
    await page.locator('#timerAlertButton').click();
    //waiting for the alert to appear
    //await page.waitForEvent('dialog');  
    page.on('dialog',async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    });
   
} );        

test('Alert Handling which expect input', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');
     // type text in the prompt alert and click alert accept button  
    await page.locator('#promtButton').click();
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('Please enter your name');
        await dialog.accept('Hello');
        await expect(page.locator('#promptResult')).toContainText('Hello');
    });
     
    
    //await page.locator('#promptButton').click(); 
    //await page.waitForEvent('dialog'); 
   // const output = await page.locator('#promptResult').textContent();
   // console.log(`Output is : ${output}`);
    //expect(output).toBe('You entered Hello');

    //page.pause();

}); 
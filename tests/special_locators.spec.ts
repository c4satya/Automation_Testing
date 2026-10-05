import {test, expect} from '@playwright/test';


//special loocators are used to locate elements on the page that have special attributes or properties, such as data-testid, aria-label, or role. These locators can be used to find elements that may not have a unique CSS selector or text content, making them useful for testing complex web applications.
test('special locators example', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  const form = page.locator('#userForm');
  await expect(form).toBeVisible();
  await form.getByLabel('Full Name').fill('John Doe');
  await form.getByLabel('Email').fill('john.doe@example.com');
  await expect(page.locator('#userName')).toHaveValue('John Doe');
  await expect(page.locator('#userEmail')).toHaveValue('john.doe@example.com');

  /*await page.getByTestId('test-id').click();
  await page.getByRole('button', { name: 'Click Me' }).click();
  await page.getByLabel('Name').fill('John Doe');
  await page.getByPlaceholder('Enter your email').fill('john.doe@example.com');
  */
});

//chaining using filters example and last() method is used to locate the last element in a list of elements that match a given selector. This can be useful when there are multiple elements on the page that match the same selector, and you want to interact with the last one specifically.       
test.only('Chaining using filters example', async ({ page }) => {    
    await page.goto('https://demoqa.com/buttons');
    const buttons = page.locator('button').filter({ hasText: 'Click Me' }).last(); 
    await buttons.click();
    await expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click');     

});

/* what is the difference between toHaveText and ToContainText is that toHaveText checks if the element's text content matches the expected text exactly, 
while ToContainText checks if the element's text content contains the e
xpected text as a substring. In other words, 
toHaveText is more strict and requires an exact match, 
while ToContainText is more flexible and allows for partial matches. */
// using nth() method example
test('using nth() method example', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');
  const buttons = page.locator('button').filter({ hasText: 'Click Me' }).nth(1); 
  await buttons.click();
  await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');     
}); 
//and() to locate the first element in a list of elements that match a given selector, you can use the first() method instead of nth(0). The first() method returns the first element in the list, while nth(0) returns the element at index 0, which is also the first element.          
// using and() method example
test('using and() method example', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');
  const buttons = page.locator('button').filter({ hasText: 'Click Me' }).first(); 
  await buttons.click();
  await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');     
}); 

//using or() method example
test('using or() method example', async ({ page }) => {
  await page.goto('https://demoqa.com/buttons');
  const buttons = page.locator('button').filter({ hasText: 'Click Me' }).or({ hasText: 'Click Me' }); 
  await buttons.click();
  await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');     
}); 
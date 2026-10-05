import { test, expect } from '@playwright/test';
/*
//getByRole is a locator method that allows you to find elements on the page based on their ARIA role and accessible name. It is part of the Playwright testing library and is used to interact with elements in a more semantic way, making tests more robust and easier to read.  buttons,links,headings,checkboxes.
//getByText is a locator method that allows you to find elements on the page based on their visible text content.ex visible text content. It is part of the Playwright testing library and is used to interact with elements in a more semantic way, making tests more robust and easier to read.   

getByLabel is a locator method that allows you to find form elements (like input fields, checkboxes, and radio buttons) based on their associated label text. It is part of the Playwright testing library and is used to interact with form elements in a more semantic way, making tests more robust and easier to read.
getByPlaceholder is a locator method that allows you to find input elements on the page based on their placeholder text. It is part of the Playwright testing library and is used to interact with input elements in a more semantic way, making tests more robust and easier to read.
getByAltText is a locator method that allows you to find elements on the page based on their alternative text (alt text) attribute. It is part of the Playwright testing library and is used to interact with elements in a more semantic way, making tests more robust and easier to read.
getByTitle is a locator method that allows you to find elements on the page based on their title attribute. It is part of the Playwright testing library and is used to interact with elements in a more semantic way, making tests more robust and easier to read.
getByTestId is a locator method that allows you to find elements on the page based on their data-testid attribute. It is part of the Playwright testing library and is used to interact with elements in a more semantic way, making tests more robust and easier to read.
locator is a method that allows you to find elements on the page based on a CSS selector. It is part of the Playwright testing library and is used to interact with elements in a more semantic way, making tests more robust and easier to read.
*/

test('getByRole example', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByRole('button', { name: 'Submit' }).click();
});

//getByText example
test('getByText example', async ({ page }) => {
  await page.goto('https://demoqa.com/elements');
  await page.getByText('Text Box', { exact: true }).click();
});

//getByLabel example
test('getByLabel example', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByLabel('Male',{ exact: true }).click();
});


//getByPlaceholder example
test('getByPlaceholder example', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.getByPlaceholder('Full Name').fill('John Doe');
});
//difference between type and fill is that type simulates typing into the input field, while fill sets the value of the input field directly. type can be used to simulate user input, while fill can be used to set the value of an input field programmatically.

//getByAltText example
test('getByAltText example', async ({ page }) => {
  await page.goto('https://demoqa.com/');
await page.getByAltText('Selenium Online Training');
const logo = page.getByAltText('Selenium Online Training');
await expect(logo).toBeVisible();
});

//getByTitle example
test('getByTitle example', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByTitle('Selenium Online Training').click();
}); 

//getByTestId example
test('getByTestId example', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.getByTestId('test-id').click();
}); 

//locator example
test('locator example', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('.card-body').first().click();
});     


 
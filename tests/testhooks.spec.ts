
import { test, expect } from '@playwright/test';

//before each test

test.beforeEach(async () => {
  console.log('Before each test');
});




//after each test
test.afterEach(async () => {
  console.log('After each test');
});




//before all tests
test.beforeAll(async () => {
  console.log('Before all tests');
});



// after all tests


test.afterAll(async () => {
  console.log('After all tests');
});

test.skip('Test 1', async () => {
  console.log('Executing Test 1');
  expect(true).toBe(true);
});

test('Test 2', async () => {
  console.log('Executing Test 2');
  expect(true).toBe(true);
});



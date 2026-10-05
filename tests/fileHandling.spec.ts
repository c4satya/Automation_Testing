import {test,expect} from '@playwright/test';

test('File Upload',async ({page})=>{
    await page.goto('https://demoqa.com/upload-download');
    await page.setInputFiles('#uploadFile','downloads/sample.jpeg');
    //await page.pause();
    //await page.click('#file-submit');
    await expect(page.locator('#uploadedFilePath')).toContainText('sample.jpeg');
} );

//file download
test('File Download',async ({page})=>{
    await page.goto('https://demoqa.com/upload-download');
    const ddownloadPromise=page.waitForEvent('download');
    await page.locator('#downloadButton').click();
    const downloadFile=await ddownloadPromise;
    expect(downloadFile.suggestedFilename()).toBe('sampleFile.jpeg');
    await downloadFile.saveAs('downloads/sample.jpeg');
    await page.pause();
});

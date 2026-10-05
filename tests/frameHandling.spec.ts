import {test,expect} from '@playwright/test';

test('Frame Handling',async ({page})=>{
    await page.goto('https://demoqa.com/frames');
    //reading text from frame1

    const frame=page.frameLocator('#frame1');
    const frameText=await frame.locator('#sampleHeading').textContent();
    console.log('Text from frame1 is :'+frameText);
    expect(frameText).toBe('This is a sample page');

    //reading text from frame2
    const frame2=page.frameLocator('#frame2');
    const frame2Text=await frame2.locator('#sampleHeading').textContent();
    console.log('Text from frame2 is :'+frame2Text);
    expect(frame2Text).toBe('This is a sample page');   

    //for nested frames
    await page.goto('https://demoqa.com/nestedframes');
    //await page.locator('#item-3').click()   ;

    const parentFrame= page.frameLocator('#frame1');
    page.pause();
    const childFrame= parentFrame.frameLocator('iframe');
    const childFrameText=await childFrame.locator('body').textContent();
    console.log('Text from child frame is :'+childFrameText);
    expect(childFrameText).toBe('Child Iframe');   


    //page.frames
    const frames=page.frames();
    console.log('Number of frames on the page is :'+frames.length); 
    frames.forEach((frame,index)=>{
        console.log(`Frame ${index}: ${frame.name()}, URL: ${frame.url()}`);
    });
    });
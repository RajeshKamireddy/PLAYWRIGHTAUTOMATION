import { test, expect } from '@playwright/test'

test.skip('Mouse Hover',async ({page})=>{

    await page.goto('https://demo.opencart.com/')
    
    const desktops = await page.locator("//a[normalize-space()='Desktops']")

    const mackbook = await page.locator("//a[normalize-space()='Mac (1)']")

    const heading = await page.locator("#content>h2")

    //Mouse hover
    await desktops.hover();
    await page.waitForTimeout(5000)
    await mackbook.hover();
    await page.waitForTimeout(5000)
    

    await page.waitForTimeout(5000) 
})

test.skip('Double Click',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const btnCopy = await page.locator("button[ondblclick='myFunction1()']")

    //Double click
    await btnCopy.dblclick();

    const f2 = await page.locator('#field2')

    await expect(f2).toHaveValue('Hello World!')


    await page.waitForTimeout(6000)
})

test('Drag and Drop',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    
    const src = await page.locator("div[id='draggable'] p")

    const dst = await page.locator("div#droppable")

    //Drag and Drop--Method1
    await src.dragTo(dst);
    
    await page.reload()
    
    await page.waitForTimeout(6000)
    //Drag and Drop--Method2

    await src.hover()
    await page.mouse.down();

    await dst.hover()
    await page.mouse.up();


    await page.waitForTimeout(6000)
})
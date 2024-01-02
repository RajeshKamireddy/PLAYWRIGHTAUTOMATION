import { test, expect } from '@playwright/test'

test('Keyboard',async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare')

    await page.locator("textarea[name='text1']").fill('Welcome to Automation')
    
    const textBox2 = await page.locator("textarea[name='text2']")

    //Ctrl+A -->select the text
    await page.keyboard.press('Control+KeyA'); //press('Meta+A');

    //Ctrl+C -->copy the text
    await page.keyboard.press('Control+KeyC'); //press('Meta+C');
    
    //Tab
    // await page.keyboard.down('Tab');
    // await page.keyboard.up('Tab');

    await textBox2.click();
    await page.waitForTimeout(3000)

    //Ctrl+V -->Paste the text
    await page.keyboard.press('Control+KeyV'); //press('Meta+V');
    
    await page.waitForTimeout(6000)

})
import { test, expect } from '@playwright/test'

test('AutoSuggestDropdown',async ({page})=>{

   await page.goto('https://www.redbus.in/');

   await page.locator('#src').fill('Delhi');

   await page.waitForSelector('ul>li>div>text:nth-child(1)');

   const options = await page.$$('ul>li>div>text.placeHolderMainText')

   for(let option of options)
   {
    const value = await option.textContent();
    if(value.includes('Badarpur'))
    {
        await option.click();
    }
   }
   await page.waitForTimeout(5000)

   await page.close();

})
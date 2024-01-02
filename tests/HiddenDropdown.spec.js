import { test, expect } from '@playwright/test'

test('HiddenDropdown',async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.fill("input[name='username']",'Admin')

    await page.fill("input[name='password']",'admin123')

    await page.click("button[type='submit']")

    await page.click("//span[normalize-space()='PIM']")

    await page.click("(//div[contains(text(),'-- Select --')])[2]")

    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span");
    
    for(let option of options)
    {
        const jobTitle = await option.textContent();
        //console.log('Job Title: ', value)
        if(jobTitle.includes('QA Engineer'))
        {
            await option.click();
            break;
        }
    }
    
    await page.waitForTimeout(5000)
    
await page.close()
})
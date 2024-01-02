import { test, expect } from '@playwright/test'

test('Date Pcker',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    //1)Directly passing date
    //await page.fill('#datepicker','12/24/1997')

    //Date Picker
    const year='2024'
    const month="December"
    const date= '20'

    await page.waitForTimeout(3000)
    await page.click('#datepicker') //opens calender
    
    while(true)
    {
        const currentYear = await page.locator('.ui-datepicker-year').textContent();
        const currentMonth = await page.locator('.ui-datepicker-month').textContent();

        if(currentYear==year && currentMonth==month)
        {
            break;
        }
        await page.locator('[title="Next"]').click(); //Next
        
    }

    const dates = await page.$$("//a[@class='ui-state-default']")
/*
    //date selection using loop
    for(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click();
            break;
        }
    }
*/
    //Data selection without loop below 3 ways

   // await page.click("//a[@class='ui-state-default'][text()='28']")

    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

   // await page.click("//a[@class='ui-state-default'][text()="+date+"]")

    await page.waitForTimeout(5000);

    await page.close();

})

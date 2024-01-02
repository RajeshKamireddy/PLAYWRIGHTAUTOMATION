const {test, expect}=require('@playwright/test')

test('MultiSelectDropdown',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //select multiple options from multi select dropdown
    await page.selectOption('#colors',['Blue','Red','Yellow'])
  
  /*  //Assertions
    //1)check no.of options in dropdown-approach1
    const options=await page.locator('#colors option')
    await expect(options).toHaveCount(5);
    
    //2)Check no.of options in dropdown -approach2
    const options=await page.$$('#colors option')
    console.log('No.of options:',options.length)
    await expect(options.length).toBe(5)
*/
    //3)check presence of value in the dropdown-approach1
    // const content=await page.locator('#colors').textContent()
    // await expect(content.includes('Blue')).toBeTruthy();

    await page.waitForTimeout(5000);

})
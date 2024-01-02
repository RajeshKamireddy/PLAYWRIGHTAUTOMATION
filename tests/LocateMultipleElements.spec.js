import { test, expect } from '@playwright/test'

test('LocateMultipleElements',async ({page})=>{

    await page.goto('https://demoblaze.com/index.html');
    //Locate all the links displayed in home page 
    const links=await page.$$('a')

    for(const link of links){
       const linkText= await link.textContent()
       console.log(linkText)
    }
    
    //Locate all the products displayed in home page 
    page.waitForSelector("//div[@id='tbodyid']//div//h4//a");

    const products=await page.$$("//div[@id='tbodyid']//div//h4//a")

    for(const product of products){
       const productName= await product.textContent()
       console.log(productName)
    }

await page.close()
})
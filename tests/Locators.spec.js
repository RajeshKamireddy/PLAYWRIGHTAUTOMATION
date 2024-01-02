//const{test,expect}=require('@playwright/test')
import { test, expect } from '@playwright/test'

test('Locators',async ({page})=>{

   await page.goto('https://demoblaze.com/index.html');

   //click on login button - Property locator
   //await page.locator('id=login2').click()
   await page.click('id=login2')

   //Provide username - CSS locator
   //await page.locator('#loginusername').fill("RajeshK")
   //await page.type('#loginusername','RajeshK')
   await page.fill('#loginusername','RajeshK')
   
   //Provide password - CSS locator
   await page.fill("input[id='loginpassword']",'rajesh123')

   //Click login button - Xpath locator
   await page.click("//button[@onclick='logIn()']")

   //verify logout link presence -xpath locator
   const logoutlink=await page.locator("//a[@id='logout2']")

   await expect(logoutlink).toBeVisible();

   await page.close()

})
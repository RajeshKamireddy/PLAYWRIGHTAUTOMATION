import { test, expect } from '@playwright/test'

test('Keyboard',async ({page})=>{

    await page.goto('https://www.foundit.in/')

    await page.waitForSelector('.mqfihd-upload');

    await page.locator('.mqfihd-upload').click()
    //Upload single file
    await page.locator('#file-upload').setInputFiles('tests\UploadFiles\Transaction-1.pdf')

    //Upload Multiple files
    await page.locator('#file-upload').setInputFiles(['tests\UploadFiles\Transaction-1.pdf',
                                                       'tests\UploadFiles\Transaction-2.pdf'])

    //Removing Files
    await page.locator('#file-upload').setInputFiles([])
    
    await page.waitForTimeout(5000)


})
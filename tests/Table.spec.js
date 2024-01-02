
import { test, expect } from '@playwright/test'

test('Table',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const table = await page.locator('#productTable')

    //Total no.of rows and columns
    const columns =await table.locator('thead>tr>th')
    console.log('No.of columns:',await columns.count())

    const rows = await table.locator("tbody>tr")
    console.log('No.of rows:',await rows.count())

    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)

    //2)select check box for product 3
/*    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText:'Product 3'
    })
    await matchedRow.locator('input').check()

    //3)select multiple check boxs of products by re-usable function
    await selectProduct(rows,page,'product 1');
    await selectProduct(rows,page,'product 3');
    await selectProduct(rows,page,'product 5');

    //4)Print all product details using loop
    for(let i=0;i<await rows.count();i++ )
    {
        const row = rows.nth(i);
        const tds = row.locator('td')
        for(let j=0;j<await tds.count()-1;j++ )
        {
            console.log(await tds.nth(j).textContent())
        }
    }
  */

    //5)Read data from all the pages in the table
    
    const pages=await page.locator('.pagination>li>a')
    console.log('No.of pages in the table:',await pages.count())

    for(let k=0;k<await pages.count();k++)
    {

        if(k>0)
        {
            await page.waitForTimeout(2000)
            await pages.nth(k).click();
        }
        await readDataFromTable(rows);
        
    }
    await page.waitForTimeout(5000)

    await page.close();

})

async function selectProduct(rows,page,name)
{
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: name
    })
    await matchedRow.locator('input').check()
}

async function readDataFromTable(rows)
{
    for(let i=0;i<await rows.count();i++ )
    {
        const row = rows.nth(i);
        const tds = row.locator('td')
        for(let j=0;j<await tds.count()-1;j++ )
        {
            console.log(await tds.nth(j).textContent())
        }
    }
}

const { test, expect } =require('@playwright/test');
test('Select Calendar', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await expect(page.locator('button.react-date-picker__calendar-button')).toBeVisible();
    await page.locator('button.react-date-picker__calendar-button').click();
    await page.pause();

    const calendarNavigatioNnext = page.locator('button.react-calendar__navigation__next-button', {exact: true});  
    await expect(calendarNavigatioNnext).toBeVisible();
    await calendarNavigatioNnext.click();
    await page.pause();
    await page.locator("//abbr[@aria-label='February 12, 2026']").click();
    await page.pause();

    await page.locator('button.react-date-picker__calendar-button').click();
    await page.pause();
    await page.locator('button.react-calendar__navigation__prev-button').click();
    await page.pause();
 
   await page.locator("//abbr[@aria-label='January 1, 2026']").click();
   await page.pause();  
})

const { test, expect } = require('@playwright/test');
const AddToCalendar = require('../pages/add_To_Calendar');

test('Select Calendar', async ({ page }) => {
    const addToCalendar = new AddToCalendar(page);

    await addToCalendar.goto();
    await addToCalendar.openCalendar();
    await page.pause();

    await addToCalendar.navigateToNextMonth();
    await page.pause();
    await addToCalendar.selectDate('February 12, 2026');
    await page.pause();

    await addToCalendar.closeCalendar();
    await page.pause();
    await addToCalendar.openCalendar();
    await addToCalendar.navigateToPreviousMonth();
    await page.pause();

    await addToCalendar.selectDate('January 1, 2026');
    await page.pause();
})

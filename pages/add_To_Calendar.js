class AddToCalendar {
    constructor(page) {
        this.page = page;
        this.calendarButton = page.locator('button.react-date-picker__calendar-button');
        this.calendarNextButton = page.locator('button.react-calendar__navigation__next-button', { exact: true });
        this.calendarPrevButton = page.locator('button.react-calendar__navigation__prev-button');
    }

    async goto() {
        await this.page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    }

    async openCalendar() {
        await this.calendarButton.waitFor({ state: 'visible' });
        await this.calendarButton.click();
    }

    async closeCalendar() {
        await this.calendarButton.click();
    }

    async navigateToNextMonth() {
        await this.calendarNextButton.waitFor({ state: 'visible' });
        await this.calendarNextButton.click();
    }

    async navigateToPreviousMonth() {
        await this.calendarPrevButton.click();
    }

    async selectDate(date) {
        await this.page.locator(`//abbr[@aria-label='${date}']`).click();
    }
}

module.exports = AddToCalendar;

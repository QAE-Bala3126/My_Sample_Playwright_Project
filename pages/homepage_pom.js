class HomePage {
    constructor(page) {
        this.page = page;
        this.menu="//img[@alt='menu']";
        this.logOut="//button[@class='nav-menu-item']";
    }
    async logoutOfApplication() {
        await this.page.click(this.menu);
        await this.page.click(this.logOut);
        await this.page.pause();
    }}

module.exports = HomePage;
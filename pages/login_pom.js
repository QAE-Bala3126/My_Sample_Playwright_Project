class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = '#email1';
        this.passwordInput = '#password1';
        this.signInButton = "//button[@type='submit']";
    }

    async login(email, password) {
        await this.page.fill(this.usernameInput, email);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.signInButton);
    }

    async loginToApplication() {
        const email = process.env.PW_EMAIL || 'shyaam3126@gmail.com';
        const password = process.env.PW_PASSWORD || 'Shyambala123';
        await this.login(email, password);
    }
}
module.exports = LoginPage;
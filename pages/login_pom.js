class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = '#email1';
        this.passwordInput = '#password1';
        this.signInButton = "//button[@type='submit']";
    }
    async loginToApplication() {
        await this.page.fill(this.usernameInput, 'shyaam3126@gmail.com');
        await this.page.fill(this.passwordInput, 'Shyambala123');
        await this.page.click(this.signInButton);
    
    }
}
module.exports = LoginPage;
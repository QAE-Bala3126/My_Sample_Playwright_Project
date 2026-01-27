const { expect } = require('@playwright/test');

class AddToCart{
    constructor(page){
        this.page=page;
        this.javaForTester="//div[@class='home-container']//div[1]//div[2]//button[1]";
        this.confirmAddToCartBtn="//button[normalize-space()='Remove from Cart']";
    }
    
    async addToCartOfApplication(){
        // `page.click()` returns a Promise; `await` waits until the click + auto-waits complete.
        await this.page.click(this.javaForTester);
        // `page.pause()` returns a Promise; it resolves when you resume from the inspector.
        await this.page.pause();
        
    }
    async confirmAddToCart(){
        // `expect(...).toBeVisible()` is async; it returns a Promise that resolves when the assertion passes.
        await expect(this.page.locator(this.confirmAddToCartBtn)).toBeVisible();

        // `page.pause()` returns a Promise; it resolves when you resume from the inspector.
        await this.page.pause();

        // `browser.close()` returns a Promise; it resolves once the browser is fully closed.
        await this.page.context().browser().close();
}
}
module.exports=AddToCart;
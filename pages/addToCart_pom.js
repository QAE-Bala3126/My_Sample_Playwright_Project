const { expect } = require('@playwright/test');

class AddToCart{
    constructor(page){
        this.page=page;
        this.javaForTester="//div[@class='home-container']//div[1]//div[2]//button[1]";
        this.confirmAddToCartBtn="//button[normalize-space()='Remove from Cart']";
    }
    
    async addToCartOfApplication(){
        await this.page.click(this.javaForTester);
        await this.page.pause();
        
    }
    async confirmAddToCart(){
        await expect(this.page.locator(this.confirmAddToCartBtn)).toBeVisible();
        await this.page.pause();
        await this.page.context().browser().close();
}
}
module.exports=AddToCart;
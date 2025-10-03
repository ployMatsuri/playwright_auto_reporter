import { expect, Page } from "@playwright/test";
import { removeSlashUrl } from "../utils";

export class ProductPage {
    baseUrl = 'https://www.saucedemo.com/inventory.html';
    btnAddToCart = '.btn btn_primary btn_small btn_inventory ';

    /**33
     * 
     * @param { Page } page 
     */

    constructor(page){
        this.page = page;
        this.products = page.locator('.inventory_item');
    }

    async goto(){
        await this.page.goto(this.baseUrl);
    }

    isValidUrl(){
        const url = removeSlashUrl(this.page.url());
        return url === this.baseUrl;
    }

    async addAllProduct() {
        const countProducts = await this.products.count();
        console.log("Total products:", countProducts);

        for (let i = 0; i < countProducts; i++) 
        {
            let product = this.products.nth(i);
            await product.locator('Button:has-text("Add to cart")').click();
            console.log(`product ${i} has added to cart`);

            const updateButtonText = await product.locator('button').textContent();
            
            expect(updateButtonText?.trim()).toBe("Remove");
            await this.page.waitForTimeout(2000);
        }
        return countProducts;
    }
}
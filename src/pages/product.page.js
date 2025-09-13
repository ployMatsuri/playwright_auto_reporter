import { Page } from "@playwright/test";
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
        this.product = page.locator('.inventory_item');
    }

    async goto(){
        await this.page.goto(this.baseUrl);
    }

    isValidUrl(){
        const url = removeSlashUrl(this.page.url());
        return url === this.baseUrl;
    }

    async addAllProduct(){
        const countProduct = await this.product.count();
        console.log(countProduct);
        // for(let i=0; i< countProduct; i++){
        //     const button = await this.product.nth(i).locator('.btn.btn_primary.btn_small.btn_inventory');
        //     await button.waitFor({ state: 'visible' });
        //     await button.click();
        //     console.log(i);
        // }
        return countProduct;
    }
}
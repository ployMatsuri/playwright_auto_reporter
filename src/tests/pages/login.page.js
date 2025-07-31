import { Page } from "@playwright/test";
import { removeSlashUrl } from "../../utils";

export class LoginPage{

    locatorUsername = '#user-name';
    locatorPassword = '#password';
    locatorBtLogin = '#login-button';
    locatorErrorMessage = '[data-test="error"]';

    baseUrl = 'https://www.saucedemo.com';

    /**
     * 
     * @param { Page } page 
     */

    constructor(page){
        this.page = page;
    }

    async goto(){
        await this.page.goto(this.baseUrl);
    }

    async fillUsernamePassword(uaername,password){
        await this.page.locator(this.locatorUsername).fill(uaername);
        await this.page.locator(this.locatorPassword).fill(password);
    }

    async getUsername(){
        return await this.page.locator(this.locatorUsername).inputValue();
    }

    async getPassword(){
        return await this.page.locator(this.locatorPassword).inputValue();
    }

    async clickLogin(){
        await this.page.click(this.locatorBtLogin);
        // await this.page.locator(this.locatorBtLogin).nth(3).click(); // click btn n = 3
    }

    async getErrorMessage(){
        try{
            return await this.page.locator(this.locatorErrorMessage).textContent();
        } catch (e) { }
        
        return "";
    }

    isValidUrl(){
        const url = removeSlashUrl(this.page.url());
        console.log(url, this.baseUrl, this.page.url());
        return url === this.baseUrl;
    }
}
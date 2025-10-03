import { expect } from "@playwright/test";
import { test } from '../pages/test-setup';
import { invalidUsers, validUsers } from '../test-data/users';

test.describe('PRODUCT FUNCTION', ()=>{
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
        await loginPage.fillUsernamePassword('standard_user','secret_sauce');
        await loginPage.clickLogin();
    });

    test.only('Add, Remove item', async ({ productPage }) => {
        expect(productPage.isValidUrl()).toBe(true);
        await productPage.addAllProduct();
        });
    });
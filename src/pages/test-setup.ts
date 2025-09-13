import { LoginPage } from "./login.page"
import { ProductPage } from "./product.page";
import { test as base, TestInfo } from "@playwright/test"
import { getTestCaseMapping, updateTestStatus } from "./googleSheetHelper";

type baseFixtures = {
    loginPage: LoginPage,
    productPage: ProductPage,
};

const SHEET_ID = '1lx3ij6Zev4wNwuX8F0iet04GAiRUh-cjbMDYdsWqkZE';
const SHEET_NAME = 'Test Case';

let testCaseMapping: Record<string, string> = Object.create(null);



export const test = base.extend<baseFixtures>({
    loginPage : async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    productPage : async ({ page }, use) => {
        await use(new ProductPage(page));
    },
   
});

// test.beforeAll(async () => {
//   testCaseMapping = (await getTestCaseMapping(SHEET_ID, SHEET_NAME)) as Record<string, string>;
// });

// test.afterEach(async ({}, testInfo: TestInfo) => {
//   const tcAnnotation = testInfo.annotations.find(a => a.type === 'tcId');
//   const tcId = tcAnnotation?.description;
//   if (!tcId) {
//     console.warn(`No TC ID found for test "${testInfo.title}"`);
//     return;
//   }

//   const range = testCaseMapping[tcId];
//   if (!range) {
//     console.warn(`No mapping found for TC ID "${tcId}"`);
//     return;
//   }

//   const status = testInfo.status === 'passed' ? 'PASS' : 'FAIL';
//   await updateTestStatus(SHEET_ID, range, status);
// });
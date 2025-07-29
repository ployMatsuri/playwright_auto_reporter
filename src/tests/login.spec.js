// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login.page';

test('Input fields should display as the data that was filled', async ({page}) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.fillUsernamePassword('testuser','password');

  expect(await loginPage.getUsername()).toBe('testuser');
  expect(await loginPage.getPassword()).toBe('password')
})

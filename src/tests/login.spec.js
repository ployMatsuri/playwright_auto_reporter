// @ts-check
import { expect } from '@playwright/test';
import { test } from './pages/base';
import { invalidUsers, validUsers } from '../test-data/users';


test.describe('LOGIN FUNCTION', () => {

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
});

test('Input fields should display as the data that was filled', async ({ loginPage }) => {

  await loginPage.fillUsernamePassword('testuser','password');

  expect(await loginPage.getUsername()).toBe('testuser');
  expect(await loginPage.getPassword()).toBe('password')
});

test('Should show an error message if log in without a username', async ({ loginPage }) => {
  
  await loginPage.fillUsernamePassword('', 'password');
  
  await loginPage.clickLogin();

  const message = await loginPage.getErrorMessage();
  expect(message).toContain('Username is required');
  expect(loginPage.isValidUrl()).toBe(true);

});

test('Should show an error message if log in without a password', async ({ loginPage }) => {
  await loginPage.fillUsernamePassword('testuser','');
  await loginPage.clickLogin();

  const message = await loginPage.getErrorMessage();
  expect(message).toContain('Password is required');
  expect(loginPage.isValidUrl()).toBe(true);
});

test('Should show an error message if log in with both fields blank', async ({ loginPage }) => {
  loginPage.fillUsernamePassword('','');
  loginPage.clickLogin();

  const massage = await loginPage.getErrorMessage();
  expect(massage).toContain('is required');
  expect(loginPage.isValidUrl()).toBe(true);
});

validUsers.forEach(({ username, password })=>{
  test(`Should logged in successfully with valid credentials: ${username}`, async ({ loginPage }) => {
      await loginPage.fillUsernamePassword(username, password);
      await loginPage.clickLogin();

      expect(await loginPage.getErrorMessage()).not.toContain('is required');
      expect(loginPage.isValidUrl()).toBe(false);
  });
});


invalidUsers.forEach(({ username, password })=>{
  test(`Should logged in fails with an error message when using invalid credentials: ${username}`, async ({ loginPage }) => {
      await loginPage.fillUsernamePassword(username, password);
      await loginPage.clickLogin();

      expect(await loginPage.getErrorMessage()).toContain('Epic sadface');
      expect(loginPage.isValidUrl()).toBe(true);
  })
});

});
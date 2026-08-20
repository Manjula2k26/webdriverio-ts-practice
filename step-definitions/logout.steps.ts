import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import { takeScreenshot } from '../utils/screenshot';

Given('I am logged into the application', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await takeScreenshot('Logged_In');
});

When('I click on menu options button', async () => {
    await LoginPage.menuButton.click();
    
});

When('I click on Logout button', async () => {
    await LoginPage.logoutButton.click();
   
});

Then('I should be redirected to login page', async () => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('https://www.saucedemo.com/');
    await takeScreenshot('Login_Page');
});
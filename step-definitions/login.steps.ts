import { When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import {LoginData} from '../test-data/loginData';
import { takeScreenshot } from '../utils/screenshot';


When('I login with valid credentials', async () => {
    await LoginPage.login(
        LoginData.validUser.username,
        LoginData.validUser.password);
        await takeScreenshot('Login_Success');
});

Then('I should see the product page', async () => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('/inventory.html');
    
})

When('I login with invalid credentials', async () => {
    await LoginPage.login(
        LoginData.invalidUser.username,
        LoginData.invalidUser.password);
        await takeScreenshot('Login_Failure');
});

Then('I should see the login error message', async () => {
    const errorMessage = await LoginPage.errorMessage.getText();
    console.log('Error Message:', errorMessage);
    await expect(LoginPage.errorMessage).toBeDisplayed();
    await takeScreenshot('Login_Error_Message');
})

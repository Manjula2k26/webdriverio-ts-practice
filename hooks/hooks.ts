import { After, Before, BeforeAll } from "@wdio/cucumber-framework";
import Loginpage from "../pageobjects/login.page";
import allure from "@wdio/allure-reporter";

BeforeAll(() => {

    console.log('=================================');
    console.log(`Environment : ${process.env.TEST_ENV || 'test'}`);
    console.log(`Browser     : ${process.env.TEST_BROWSER || 'chrome'}`);
    console.log(`Test Suite  : ${process.env.TEST_SUITE || 'all'}`);
    console.log('=================================');

});

Before(async () =>{
    await Loginpage.open();

});

After(async function(scenario) 
{
        const screenshot = await browser.takeScreenshot();
        await allure.addAttachment('Scenario final state', Buffer.from(screenshot, 'base64'), 'image/png');
        
})
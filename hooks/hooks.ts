import { After, Before } from "@wdio/cucumber-framework";
import Loginpage from "../pageobjects/login.page";
import allure from "@wdio/allure-reporter";

Before(async () =>{
    await Loginpage.open();

});

After(async function(scenario) 
{
        const screenshot = await browser.takeScreenshot();
        await allure.addAttachment('Scenario final state', Buffer.from(screenshot, 'base64'), 'image/png');
        
})
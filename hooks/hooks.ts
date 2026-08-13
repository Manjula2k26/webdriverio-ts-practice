import { After, Before } from "@wdio/cucumber-framework";
import Loginpage from "../pageobjects/login.page";

Before(async () =>{
    await Loginpage.open();

});

After(async function(scenario) 
{
    if(scenario.result?.status === 'FAILED')
        await browser.takeScreenshot();
})
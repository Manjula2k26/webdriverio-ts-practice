import allure from '@wdio/allure-reporter';

export async function takeScreenshot(name: string) {
    const screenshot = await browser.takeScreenshot();
    await allure.addAttachment(name, Buffer.from(screenshot, 'base64'), 'image/png');
    
}
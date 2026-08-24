import { When, Then } from '@wdio/cucumber-framework';

import CheckoutPage from '../pageobjects/checkout.page';

import { takeScreenshot } from '../utils/screenshot';

When('I proceed to checkout', async () => {
    await CheckoutPage.proceedToCheckout();
    await takeScreenshot('Checkout Page');
});

When(
    'I enter checkout information',
    async function (datatable){
        const data = datatable.rowsHash();
        await CheckoutPage.enterCheckoutInformation(
            data.firstName,
            data.lastName,
            data.postalCode
        );

        await takeScreenshot('Checkout Information entered');
    });

    When('I continue checkout', async () => {
        await CheckoutPage.continueCheckout();
        await takeScreenshot('Checkout Information Submitted');
    })

    Then('I should see the order overview', async () => {
        const currentUrl = await browser.getUrl();
        expect(currentUrl).toContain('checkout-step-two');
    });

    When('I finish the order', async () => {

    await CheckoutPage.finishOrder();

    await takeScreenshot('Order Completed');
});

Then('I should see the order confirmation', async() => {
    const message = await CheckoutPage.getOrderCompleteMessage();
    expect(message).toBe('Thank you for your order!');
     await takeScreenshot('Order Confirmation');
});
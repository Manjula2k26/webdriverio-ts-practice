class CheckoutPage{

   get checkoutButton() {
        return $('[data-test="checkout"]');
    }

    get firstNameInput() {
        return $('[data-test="firstName"]');
    }

    get lastNameInput() {
        return $('[data-test="lastName"]');
    }

    get postalCodeInput() {
        return $('[data-test="postalCode"]');
    }

    get continueButton() {
        return $('[data-test="continue"]');
    }

    get finishButton()
    {
        return $('[data-test="finish"]');
    }

    get orderCompleteMessage()
    {
        return $('.complete-header');
    }

    async proceedToCheckout()
    {
        await this.checkoutButton.waitForClickable();
        await this.checkoutButton.click();
    }

    async enterCheckoutInformation(firstName: string, lastName: string, postalCode: string)
    {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
        
    }

    async continueCheckout() {
        await this.continueButton.click();
    }

    async finishOrder()
    {
        await this.finishButton.waitForClickable();
        await this.finishButton.click();
    }

    async getOrderCompleteMessage()
    {
        return await this.orderCompleteMessage.getText();
    }

}

export default new CheckoutPage();
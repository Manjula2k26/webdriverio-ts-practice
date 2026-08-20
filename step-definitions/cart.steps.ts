import { When, Then } from '@wdio/cucumber-framework';

import ProductsPage from '../pageobjects/products.page';
import CartPage from '../pageobjects/cart.page';
import LoginPage from '../pageobjects/login.page';

import { takeScreenshot } from '../utils/screenshot';


When('I add {string} to the cart', async (productName: string) => {

    await ProductsPage.addBackpackToCart();

    await takeScreenshot('Product Added to Cart');
});


Then('I should see {string} in the cart', async (productName: string) => {

    await ProductsPage.openCart();

    await takeScreenshot('Cart Page');

    expect(await CartPage.getProductName()).toBe(productName);
});


When('I logout', async () => {

    await LoginPage.logout();

    await takeScreenshot('Login Page After Logout');
});


Then('I should be redirected to the login page', async () => {

    await expect(browser).toHaveUrl('https://www.saucedemo.com/');
});
class ProductsPage{

    get backpackAddButton()
    {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get cartLink()
    {
       return $('.shopping_cart_link')
    }

    async addBackpackToCart()
    {
        await this.backpackAddButton.click();
    }

    async openCart()
    {
        await this.cartLink.click();
    }
}


export default new ProductsPage();
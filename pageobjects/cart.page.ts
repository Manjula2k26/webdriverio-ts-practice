class CartPage{

    get cartItemName()
    {
        return  $('.inventory_item_name');
    }

    get removeButton()
    {
        return $('#remove-sauce-labs-backpack');
    }

    get cartItems()
    {
        return $$ ('.cart_item');
    }

    async getProductName()
    {
        return await this.cartItemName.getText();
    }

    async removeBackPack()
    {
        await this.removeButton.click();  
    }

    async getCartItemsCount()
    {
        return await this.cartItems.length;
    }
}

export default new CartPage();
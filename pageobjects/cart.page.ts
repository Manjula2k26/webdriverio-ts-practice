class CartPage{

    get cartItemName()
    {
        return  $('.inventory_item_name');
    }

    async getProductName()
    {
        return await this.cartItemName.getText();
    }
}

export default new CartPage();
var CartPage = function () {
    this.URL = 'http://automationpractice.com/index.php?id_product=1&controller=product#/size-m/color-orange';
    this.productName = element(By.css("#layer_cart_product_title"));
}

module.exports = CartPage;
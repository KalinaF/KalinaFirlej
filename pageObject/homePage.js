var HomePage = function () {
    this.URL = 'http://automationpractice.com/index.php';
    this.cartLabel = element(By.css(".shopping_cart"));
    this.contactUsLink = element(By.css("#contact-link"));
    this.womenTab = element(By.css("#block_top_menu > ul > li:nth-child(1) > a"));
}

module.exports = HomePage;
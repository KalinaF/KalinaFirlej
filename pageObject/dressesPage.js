var DressesPage = function () {
    this.URL = 'http://automationpractice.com/index.php?id_category=8&controller=category';
    this.dressesHeader = element(By.css(".cat-name"));
    this.dressesContent = element(By.css("#center_column"));

    this.dress1 = element(By.css("li.ajax_block_product:nth-child(1)"));
    this.dress2 = element(By.css("li.ajax_block_product:nth-child(2)"));
    this.dress3 = element(By.css("li.ajax_block_product:nth-child(3)"));
    this.dress4 = element(By.css("li.ajax_block_product:nth-child(4)"));
    this.dress5 = element(By.css("li.ajax_block_product:nth-child(5)"));

}
module.exports = DressesPage;
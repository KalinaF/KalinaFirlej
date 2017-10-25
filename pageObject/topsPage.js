var TopsPage = function () {
    this.URL = 'http://automationpractice.com/index.php?id_category=4&controller=category';
    this.topsHeader = element(By.css("#center_column > h1 > span.cat-name"));
    this.fadedShortLabel = element(By.css("li.ajax_block_product:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h5:nth-child(1) > a"));
}
module.exports = TopsPage;
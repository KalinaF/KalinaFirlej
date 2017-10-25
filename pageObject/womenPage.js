var WomenPage = function () {
    this.URL = 'http://automationpractice.com/index.php?id_category=3&controller=category';
    this.womenHeader = element(By.css("#center_column > h1 > span.cat-name"));
    this.topsLabel = element(By.css("#categories_block_left > div > ul > li:nth-child(1) > a"));
}
module.exports = WomenPage;
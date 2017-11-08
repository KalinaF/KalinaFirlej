var SingleDressPage = function () {
    this.URL = "http://automationpractice.com/index.php?id_category=8&controller=category";
    selectorHeader = element(By.css(".pb-center-column > h1:nth-child(1)"));
    selectorReference = element(By.css("#product_reference"));
    selectorValue = element(By.css("#our_price_display"));

    this.getHeader = function(){
        return element(By.css(".pb-center-column > h1:nth-child(1)"));
    };
    this.getReference = function (){
        return element(By.css("#product_reference"));
    };
    this.getValue = function(){
        return element(By.css("#our_price_display"));
    };

}
module.exports = SingleDressPage;
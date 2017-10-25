var FadedShortPage = function () {
    this.descriptionCondition = element(By.css("#short_description_content > p"));
    this.conditionNew = element(By.css("span.editable:nth-child(3)"));
    this.productHeader = element(By.css(".pb-center-column > h1"));
    this.dropdownList = element(By.css("#uniform-group_1"));
    this.sizeM = element(By.css("#group_1 > option:nth-child(2)"));
    this.addToCartButton = element(By.css("button.exclusive > span:nth-child(1)"));
}
FadedShortPage.prototype.isLabelLongerThan = function (isLongerThan) {
    var that = this;
    return new Promise(function (resolve) {
        that.descriptionCondition.getText().then(function (text) {
            resolve(text.length > isLongerThan);
        })
    });
}

module.exports = FadedShortPage;
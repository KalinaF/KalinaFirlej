var HomePage = require("../../pageObject/homePage.js");
var WomenPage = require("../../pageObject/womenPage.js");
var TopsPage = require("../../pageObject/topsPage.js");
var FadedShortPage = require("../../pageObject/fadedShortPage.js");
var CartPage = require("../../pageObject/cartPage.js")

var homePage = new HomePage();
var womenPage = new WomenPage();
var topsPage = new TopsPage();
var fadedShortPage = new FadedShortPage();
var cartPage = new CartPage();


describe('Protractor Demo App', function () {
    it('go to Women Page', function () {
        browser.get(homePage.URL);
        homePage.womenTab.click();
        expect(womenPage.womenHeader.isDisplayed()).toBe(true);
    });
    it('validate if loaded: Women Page', function () {
        //     expect((womenPage.textToBePresentInElementValue((womenHeader), 'women'), 5000);
        expect(womenPage.womenHeader.getText()).toEqual('WOMEN ');
    });
    it('go to Tops Page', function () {
        womenPage.topsLabel.click();
        expect(topsPage.topsHeader.isDisplayed()).toBe(true);
    });
    it('validate if loaded: Tops Page', function () {
        expect(topsPage.topsHeader.getText()).toEqual('TOPS ');
    });
    it('go to Faded Short.. Page', function () {
        topsPage.fadedShortLabel.click();
        expect(fadedShortPage.productHeader.isDisplayed()).toBe(true);
    });
    it('check if Faded Short.. New', function () {
        expect(fadedShortPage.descriptionCondition.isDisplayed()).toBe(true);
    });
    it('description should be longer than 8 chars', function () {
        // expect(fadedShortPage.isLabelLongerThan.toBe(true));
        expect(fadedShortPage.isLabelLongerThan(8).then(
            console.log));
    });
    it('check visibility of dropdown list', function () {
        fadedShortPage.dropdownList.click();
        expect(fadedShortPage.dropdownList.isDisplayed()).toBe(true);
    });
    it('if M on the dropdown list', function () {
        fadedShortPage.sizeM.click();
        expect(fadedShortPage.sizeM.getAttribute('value')).toEqual('2');
    });
    it('add to Cart', function () {
        fadedShortPage.addToCartButton.click();
        browser.wait(function () {
            return cartPage.productName.isDisplayed();
        }).then(function (isDisplayed) {
            expect(isDisplayed).toBe(true);
        });

    });
});
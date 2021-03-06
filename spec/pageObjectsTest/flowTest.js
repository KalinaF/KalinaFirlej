var HomePage = require("../../pageObject/homePage.js");
var homePage = new HomePage();

var ContactUsPage = require("../../pageObject/contactUsPage.js");
var contactUsPage = new ContactUsPage();

describe('Protractor Demo App', function () {
    it('go to Contact Us Page', function () {
        browser.waitForAngularEnabled(false);
        browser.get(homePage.URL);
        homePage.contactUsLink.click();
        expect(contactUsPage.customerServiceLabel.getText()).toEqual('CUSTOMER SERVICE - CONTACT US');
    });
    it('check visibility of dropdown list', function () {
        browser.waitForAngularEnabled(false);
        browser.get(contactUsPage.URL);
        expect(contactUsPage.dropdownList.isDisplayed()).toBe(true); 
    });    
    it('check visibility of send button', function () {
        browser.waitForAngularEnabled(false);
        browser.get(contactUsPage.URL);
        expect(contactUsPage.sendButton.isDisplayed()).toBe(true); 
    });    
});
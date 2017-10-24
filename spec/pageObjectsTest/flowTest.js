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
});
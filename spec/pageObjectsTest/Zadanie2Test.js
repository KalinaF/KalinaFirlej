var DressesPage = require("../../pageObject/dressesPage.js");
var SingleDressPage = require("../../pageObject/singleDressPage.js")
var data = require("../../pageObject/data.js")
var dressesPage = new DressesPage();
var singleDressPage = new SingleDressPage();

beforeAll(function () {
    browser.get(dressesPage.URL);
});

using(data, function (dress) {

    describe('Protractor Demo App', function () {
        it('go to every Dress Page and check the page title', function () {
            dressesPage[dress.selector].click();
            expect(singleDressPage.selectorHeader.getAttribute("h1")).toEqual(dress.title)
        });
        it('validate if every dress label is correct ', function () {
            dressesPage[dress.selector].click();
            expect(singleDressPage.selectorReference.getText()).toEqual(dress.reference);
        });
        it('validate if every dress value is correct ', function () {
            dressesPage[dress.selector].click();
            expect(singleDressPage.selectorValue.getText()).toEqual(dress.value);
        });
    });
});

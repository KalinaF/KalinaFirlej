beforeAll(function(){//'kod który wykona się przed wszystkim',
}); 

beforeEach(function(){//'kod który wykona się przed każdym testem',
}); 

beforeAll(function(){//'kod który wykona się po wszystkim',
});

beforeEach(function(){//'kod który wykona się po każdym teście',
}); 

describe('Protractor Demo App', function () {
    it('should have a title', function () {
        browser.waitForAngularEnabled(false);
        browser.get('http://automationpractice.com/index.php');

        expect(browser.findElement(By.css('.shopping_cart'))
            .getText()).toEqual('Cart (empty)');
    });
});
var ContactUsPage = function () {
    this.URL = 'http://automationpractice.com/index.php?controller=contact';
    this.customerServiceLabel = element(By.css("#center_column > h1"));
    this.dropdownList = element(By.css('#uniform-id_contact > span'));
    this.sendButton = element(By.css("#submitMessage > span"))
}

module.exports = ContactUsPage;



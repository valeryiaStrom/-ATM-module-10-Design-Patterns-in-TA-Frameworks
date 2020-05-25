const BasePage = require('./base_page/base_page');
const HomePage = require('./home_page/home_page');
const CareersPage = require('./careers_page/careers_page');

class PageFactory {
  static getPage(pageName) {
    switch (pageName) {
      case "Home":
        return new HomePage();
      case "Careers":
        return new CareersPage();
      default:
        return new BasePage();        
    };
  };
};

module.exports = PageFactory;

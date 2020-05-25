const Header = require('../base_page/components/header');

class BasePage {
  constructor() {
    this.header = new Header();
  }
  open(url) {
    return browser.get(url);
  }
  getCurrentUrl() {
    return browser.getCurrentUrl();
  }
}

module.exports = BasePage;

const Element = require('../../base_elements/base_element');

class Header {
  constructor() {
    this.careersButton = new Element(`css`, `.top-navigation__item [href='/careers']`);
  }
  clickCareersButton() {
    return this.careersButton.click();
  }
}

module.exports = Header;

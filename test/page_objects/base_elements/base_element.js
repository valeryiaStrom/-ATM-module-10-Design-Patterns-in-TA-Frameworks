class Element {
  constructor(selectorType, selector) {
    switch (selectorType) {
      case 'css':
        this.element = element(by.css(selector));
        break;
      case 'id':
        this.element = element(by.id(selector));
        break;
      default:
        throw new Error(`Selector type [${selectorType}] is not recognized. Try to use one of the following selector types: css, id.`);
    }
  }
  click() {
    return this.element.click();
  }
  sendInput(input) {
    return this.element.sendKeys(input);
  }
  getElementText() {
    return this.element.getText();
  }
}

module.exports = Element;

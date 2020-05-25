class Collection {
  constructor(selectorType, selector) {
    switch (selectorType) {
      case 'css':
        this.collection = element.all(by.css(selector));
        break;
      case 'id':
        this.collection = element.all(by.id(selector));
        break;
      default:
        throw new Error(`Selector type [${selectorType}] is not recognized. Try to use one of the following selector types: css, id.`);
    }
  }
  async countItems() {
    const collectionCount = await this.collection.count();
    return collectionCount;
  }
  getElementByIndex(elementIndex) {
    return this.collection.get(elementIndex);
  }
  async getAttributeValues(attribute) {
    const arrayOfAttributesValues = await this.collection.getAttribute(attribute);
    return arrayOfAttributesValues;
  }
  async getTexts() {
    const arrayOfCollectionTexts = await this.collection.getText();
    return arrayOfCollectionTexts;
  }
  // async clickElementByText(textToClick) {
  //   const arrayOfElementTexts = await this.collection.getText();
  //   //---
  //   arrayOfElementTexts.map((elementText) => elementText.trim());
  //   //---
  //   const elementToClickIndex = arrayOfElementTexts.indexOf(textToClick);
  //   if (elementToClickIndex === -1) {
  //       throw new Error(`No element with [${textToClick}] text found!`);
  //   }
  //   return this.collection.get(elementToClickIndex).click();
  // }
  async clickElementByText(textToClick) {
    const arrayOfElementTexts = await this.collection.getText();
    //---
    const arrayOfTrimmedElementTexts = arrayOfElementTexts.map((elementText) => elementText.trim());
    //---
    const elementToClickIndex = arrayOfTrimmedElementTexts.indexOf(textToClick);
    if (elementToClickIndex === -1) {
        throw new Error(`No element with [${textToClick}] text found!`);
    }
    return this.collection.get(elementToClickIndex).click();
  }
}

module.exports = Collection;

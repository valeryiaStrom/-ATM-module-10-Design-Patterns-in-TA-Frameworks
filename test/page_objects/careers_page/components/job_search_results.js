const Element = require('../../base_elements/base_element');
const Collection = require('../../base_elements/base_collection');

class JobSearchResults {
  constructor() {
    this.heading = new Element(`css`, `.search-result__heading`);
    this.searchResultList = new Element(`css`, `.search-result__list`);
    this.searchResultItems = new Collection(`css`, `.search-result__item`);
  }
  countSearchResults() {
    return this.searchResultItems.countItems();
  }
  getHeadingText() {
    return this.heading.getElementText();
  }
}

module.exports = JobSearchResults;

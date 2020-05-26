const Element = require('../../base_elements/base_element');
const Collection = require('../../base_elements/base_collection');
const EC = protractor.ExpectedConditions;

class JobSearchForm {
  constructor() {
    this.keywordField = new Element(`css`, `input[id*='keyword']`);
    this.locationCombobox = new Element(`css`, `[class$='location'] span[role='combobox']`);
    this.listOfAvailableLocations = new Collection(`css`, `[id$='location-results'] li[id]`);
    this.departmentCheckbox = new Element(`css`, `[class*='departments'][role='combobox']`);
    this.listOfAvailableDepartments = new Collection(`css`, `.multi-select-dropdown input[data-value] + span`);
    this.submitButton = new Element(`css`, `button.recruiting-search__submit`);
  }
  passKeyword(keyword) {
    return this.keywordField.sendInput(keyword);
  }
  async selectLocation(location) {
    await this.locationCombobox.click();
    await this.locationCombobox.sendInput(location);
    const targetLocation = element(by.css(`ul[id$='location-results']`));
    await browser.wait(EC.elementToBeClickable(targetLocation), 5000);
    await this.listOfAvailableLocations.clickElementByText(location);
  }
  async selectDepartment(department) {
    await this.departmentCheckbox.click();
    await this.listOfAvailableDepartments.clickElementByText(department);
  }
  clickSubmitButton() {
    return this.submitButton.click();
  }
  async submitJobSearchForm(keyword, location, department) {
    await this.passKeyword(keyword);
    await this.selectLocation(location);
    await this.selectDepartment(department);
    await this.clickSubmitButton();
  }
  async waitForTheFormToBeVisible() {
    const form = element(by.css('form.job-search__form'));
    await browser.wait(EC.visibilityOf(form), 5000);
  }
}

module.exports = JobSearchForm;

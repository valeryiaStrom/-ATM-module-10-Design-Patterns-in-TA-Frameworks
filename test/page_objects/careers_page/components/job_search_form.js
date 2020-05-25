const Element = require('../../base_elements/base_element');
const Collection = require('../../base_elements/base_collection');
const EC = protractor.ExpectedConditions;

class JobSearchForm {
  constructor() {
    this.keywordField = new Element(`css`, `input[id*='keyword']`);
    this.locationCombobox = new Element(`css`, `[class$='location'] span[role='combobox']`);
    this.listOfAvailableLocations = new Collection(`css`, `[id$='location-results'] li[id]`);
    //this.listOfAvailableLocations = new Collection(`css`, `select[id$='location'] option`);
    this.departmentCheckbox = new Element(`css`, `[class*='departments'][role='combobox']`);
    this.listOfAvailableDepartments = new Collection(`css`, `.multi-select-dropdown input[data-value] + span`);
    //this.listOfAvailableDepartments = new Collection(`css`, `select[id$='department'] option`);
    this.submitButton = new Element(`css`, `button.recruiting-search__submit`);
  }
  passKeyword(keyword) {
    return this.keywordField.sendInput(keyword);
  }
  // async selectLocation(location) {
  //   await this.locationCombobox.click();
  //   await this.locationCombobox.sendInput(location);
  //   const targetLocation = element(by.css(`[id$='location-results'] li[id$='${location}']`));
  //   return targetLocation.click();
  // }
  // async selectLocation(location) {
  //   await this.locationCombobox.click();
  //   const arrayOfLocationsValues = await this.listOfAvailableLocations.getAttributeValues('value');
  //   const locationIndex = arrayOfLocationsValues.indexOf(location);
  //   if (locationIndex === -1) {
  //     throw new Error(`No location [${location}] found.`);
  //   }
  //   await this.locationCombobox.sendInput(location);
  //   const targetLocation = element(by.css(`[id$='location-results'] li[id$='${location}']`));
  //   return targetLocation.click();
  // }
  async selectLocation(location) {
    await this.locationCombobox.click();
    await this.locationCombobox.sendInput(location);
    await this.listOfAvailableLocations.clickElementByText(location);
    // const arrayOfLocationsValues = await this.listOfAvailableLocations.getAttributeValues('value');
    // const locationIndex = arrayOfLocationsValues.indexOf(location);
    // if (locationIndex === -1) {
    //   throw new Error(`No location [${location}] found.`);
    // }
    // await this.locationCombobox.sendInput(location);
    // const targetLocation = element(by.css(`[id$='location-results'] li[id$='${location}']`));
    // return targetLocation.click();
  }
  // async selectDepartment(department) {
  //   await this.departmentCheckbox.click();
  //   const targetDepartment = element(by.css(`.multi-select-dropdown input[data-value='${department}'] + span`));
  //   await browser.wait(EC.elementToBeClickable(targetDepartment), 5000);
  //   return targetDepartment.click();
  // }
  async selectDepartment(department) {
    await this.departmentCheckbox.click();
    await this.listOfAvailableDepartments.clickElementByText(department);
    // const arrayOfDepartmentsValues = await this.listOfAvailableDepartments.getAttributeValues(`value`);
    // const departmentIndex = arrayOfDepartmentsValues.indexOf(department);
    // if (departmentIndex === -1) {
    //   throw new Error(`No department [${department}] found.`);
    // }
    // const targetDepartment = element(by.css(`.multi-select-dropdown input[data-value='${department}'] + span`));
    // await browser.wait(EC.elementToBeClickable(targetDepartment), 5000);
    // return targetDepartment.click();
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

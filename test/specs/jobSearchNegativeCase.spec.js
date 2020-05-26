const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
chai.should();
const PageFactory = require('../page_objects/pageFactory');
const EC = protractor.ExpectedConditions;

describe('jobs search', function() {
  beforeEach(function() {
    browser.waitForAngularEnabled(false);
    return browser.manage().window().maximize();
  });

  it('should shrow an error for jobs in Zimbabwe', async function() {
    const keyword = 'Test';
    const location = 'Zimbabwe';
    const department = 'Software Test Engineering';
  
    await PageFactory.getPage('Home').open();
    await PageFactory.getPage('Home').header.clickCareersButton();
    await PageFactory.getPage('Careers').jobSearchForm.waitForTheFormToBeVisible();
    return PageFactory.getPage('Careers').jobSearchForm.submitJobSearchForm(keyword, location, department).should.be.rejectedWith(`No element with [${location}] text found!`);
  });
});

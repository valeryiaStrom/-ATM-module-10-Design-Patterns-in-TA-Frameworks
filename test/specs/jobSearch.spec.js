const expect = require('chai').expect;
const PageFactory = require('../page_objects/pageFactory');
const EC = protractor.ExpectedConditions;

describe('jobs search', function() {
  beforeEach(function() {
    browser.waitForAngularEnabled(false);
    return browser.manage().window().maximize();
  });

  it('should return 9 job offers for Test Engineers from Minsk', async function() {
    const keyword = 'Test';
    const location = 'Minsk';
    const department = 'Software Test Engineering';
  
    await PageFactory.getPage('Home').open();
    await PageFactory.getPage('Home').header.clickCareersButton();
    await PageFactory.getPage('Careers').jobSearchForm.waitForTheFormToBeVisible();
    await PageFactory.getPage('Careers').jobSearchForm.submitJobSearchForm(keyword, location, department);
    const firstSearchResultItem = PageFactory.getPage("Careers").jobSearchResults.searchResultItems.getElementByIndex(0);
    await browser.wait(EC.elementToBeClickable(firstSearchResultItem), 10000);
    const amountOfSearchResults = await PageFactory.getPage("Careers").jobSearchResults.countSearchResults();
    const searchResultsHeading = await PageFactory.getPage('Careers').jobSearchResults.getHeadingText();
    expect(searchResultsHeading).to.equal(`WE FOUND ${amountOfSearchResults} JOB OPENINGS RELATED TO "${keyword.toUpperCase()}"`);
    expect(amountOfSearchResults).to.be.equal(8);
  });
});

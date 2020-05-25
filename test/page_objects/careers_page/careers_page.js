const BasePage = require('../base_page/base_page');
const JobSearchForm = require('../careers_page/components/job_search_form');
const JobSearchResults = require('../careers_page/components/job_search_results');

class CareersPage extends BasePage {
  constructor() {
    super();
    this.jobSearchForm = new JobSearchForm();
    this.jobSearchResults = new JobSearchResults();
  }
}

module.exports = CareersPage;

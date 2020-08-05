module.exports = {
  '@tags': ['google'],
  'Google advanced search: Elon Musk'(browser) {
    const mainQuery = 'Elon Musk';

    const mainQueryInputSelector = 'input[name="as_q"]';

    const languageDropdownOpenerSelector = '#lr_button';
    const languageDropdownValueSelector = '.goog-menuitem[value="lang_en"]';
    const lastUpdateDropdownOpenerSelector = '#as_qdr_button';
    const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]';
    const submitButtonSelector = '.jfk-button[type="submit"]';

    const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`;
    const resultsPageLanguageSelector = '[aria-label="Search English pages"]';
    const resultsPageLastUpdateSelector = '[aria-label="Past month"]';

    browser
      .url('https://www.google.com/advanced_search')
      .setValue(mainQueryInputSelector, mainQuery)
      .click(languageDropdownOpenerSelector)
      .click(languageDropdownValueSelector)
      .click(lastUpdateDropdownOpenerSelector)
      .click(lastUpdateDropdownValueSelector)
      .click(submitButtonSelector)
      .assert.urlContains('as_q=Elon+Musk', 'Params: Query is Elon Musk')
      .assert.urlContains('lr=lang_en', 'Params: Language is English')
      .assert.urlContains('as_qdr=m', 'Params: Time period is last month')

    browser.assert.visible(resultsPageQuerySelector, 'UI: Elon Musk is set in the query input');
    browser.assert.containsText(resultsPageLanguageSelector, 'Search English pages', 'UI: Language is set to English')
    browser.assert.containsText(resultsPageLastUpdateSelector, 'Past month', 'UI: Last update is set to Past month')

    browser.saveScreenshot('tests_output/google.png')

  }
}
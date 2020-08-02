module.exports = {
  'Google advanced search: Elon Musk'(browser) {
    const mainQuery = 'Elon Musk';

    const mainQueryInputSelector = 'name="as_q"';
    browser
      .url('https://www.google.com/advanced_search')
      .setValue()
  }
}
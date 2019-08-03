const client = algoliasearch(config.APPLICATION_ID, config.SEARCH_ONLY_API_KEY);
const index = client.initIndex('dev_DRINKS');
autocomplete('#search-input', { hint: false }, [
  {
    source: autocomplete.sources.hits(index, { hitsPerPage: 5 }),
    displayKey: 'strDrink',
    templates: {
      suggestion: function(suggestion) {
        return suggestion._highlightResult.strDrink.value;
      }
    }
  }
]).on('autocomplete:selected', function(event, suggestion, dataset, context) {
  console.log(event, suggestion, dataset, context);
});

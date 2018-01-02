var SearchFactory = (function () {
    function SearchFactory(searchConfiguration) {
        this.searchConfiguration = searchConfiguration;
    }
    SearchFactory.prototype.createTrelloSearcher = function () {
        return new TrelloSearcher(this.searchConfiguration.trelloApiKey, this.searchConfiguration.trelloApiToken);
    };
    return SearchFactory;
}());

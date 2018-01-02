var TrelloSearcher = (function () {
    function TrelloSearcher(trelloApiKey, trelloApiToken) {
        this.trelloApiKey = trelloApiKey;
        this.trelloApiToken = trelloApiToken;
    }
    TrelloSearcher.prototype.searchAndAppendResultsToList = function (query, listId) {
        $.get(this.includeApiPermissions("https://api.trello.com/1/search?query=" + query), function (data) {
            for (var _i = 0, _a = data["cards"]; _i < _a.length; _i++) {
                var card = _a[_i];
                var urlNode = document.createElement("li");
                urlNode.innerHTML = card.name;
                var aNode = document.createElement("a");
                aNode.setAttribute("href", card.url);
                aNode.appendChild(urlNode);
                document.getElementById("results").appendChild(aNode);
            }
        });
    };
    /**
     * Includes the API Token and Key to the URL.
     * @param {string} url The URL that needs API permissions
     * @returns {string} with API token and Key added
     */
    TrelloSearcher.prototype.includeApiPermissions = function (url) {
        var hasExistingQueryString = url.indexOf("?") > -1;
        var firstQueryConnectorToken = hasExistingQueryString ? "&" : "?";
        return url + firstQueryConnectorToken + "key=" + this.trelloApiKey + "&token=" + this.trelloApiToken;
    };
    TrelloSearcher.prototype.getLoginUrl = function () {
        return "https://trello.com/1/authorize?expiration=never&name=SinglePurposeToken&key=" + this.trelloApiKey;
    };
    return TrelloSearcher;
}());

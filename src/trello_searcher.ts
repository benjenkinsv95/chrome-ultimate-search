class TrelloSearcher {

    constructor(private trelloApiKey: string, private trelloApiToken: string){
    }

    searchAndAppendResultsToList(query: string, listId: string):  void {
        $.get( this.includeApiPermissions("https://api.trello.com/1/search?query=" + query), function(data ) {
            for(let card of data["cards"]){
                let urlNode = document.createElement("li");
                urlNode.innerHTML = card.name;

                let aNode = document.createElement("a");
                aNode.setAttribute("href", card.url);
                aNode.appendChild(urlNode);

                document.getElementById("results").appendChild(aNode);
            }
        });
    }

    /**
     * Includes the API Token and Key to the URL.
     * @param {string} url The URL that needs API permissions
     * @returns {string} with API token and Key added
     */
    private includeApiPermissions(url: string) {
        let hasExistingQueryString : boolean = url.indexOf("?") > -1;
        let firstQueryConnectorToken = hasExistingQueryString ? "&" : "?";
        return url + firstQueryConnectorToken + "key=" + this.trelloApiKey + "&token=" + this.trelloApiToken;
    }

    getLoginUrl() : string {
        return "https://trello.com/1/authorize?expiration=never&name=SinglePurposeToken&key=" + this.trelloApiKey;
    }
}

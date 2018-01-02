class SearchFactory {

    constructor(private searchConfiguration: SearchConfiguration){
    }
    
    createTrelloSearcher() : TrelloSearcher {
        return new TrelloSearcher(this.searchConfiguration.trelloApiKey, this.searchConfiguration.trelloApiToken);
    }
}
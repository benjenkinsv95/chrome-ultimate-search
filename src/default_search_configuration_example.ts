/**
 * An example of how a default search configuration could be setup.
 *
 * Use your own trello API key and token.
 * @type {{trelloApiKey: string; trelloApiToken: string}}
 */

const DEFAULT_SEARCH_CONFIGURATION : SearchConfiguration = {
    /**
     * API Key can be found here: https://trello.com/app-key
     *
     * Ex. "28f9ddddc439542c4bb61aecfb69814"
     * @type {string}
     */
    trelloApiKey: undefined,

    /**
     * API Token can be found here: https://trello.com/app-key in the Token section.
     *
     * Ex. "278ecd627ea2433caff879c24a50f102938439bccc140f2d3c2a57598a8e1a5"
     * @type {string}
     */
    trelloApiToken: undefined
};
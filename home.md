# Eve Swagger Interface

## An OpenAPI for EVE Online

JavaScript client for [ESI](https://developers.eveonline.com/blog/article/introducing-the-esi-api) compatible with NodeJS.
The client returns a developer friendly set of functions that return promises resolving to the response from ESI endpoint.
The underlying client library is generated by [Swagger Codegen](https://github.com/swagger-api/swagger-codegen).
Its documentation can be found [here](https://github.com/lhkbob/eve-swagger-js/blob/master/generated/README.md), which is primarily useful for details on the response data models.

While ESI does report incremental versions, Swagger primarily imposes the three available versions: legacy, latest, and dev. Due to this, this library's versioning will be independent of the ESI version. It is entirely possible that as the ESI endpoints are updated, this library's code will not need to be changed. On the other hand, the new ESI versions could add new end points or change the data in a response, etc. in which case this will be updated ASAP.

- API version: 0.3.4 (The ESI version)
- Package version: 0.1.0 (The NodeJS dependency version)
- Source: [https://github.com/lhkbob/eve-swagger-js/](https://github.com/lhkbob/eve-swagger-js/)

## Installation

### For [Node.js](https://nodejs.org/)

Currently, this library has not been published to the `npm` repository.
However, it can still be depended on in NodeJS projects by including a dependency in `package.json` using a GitHub URL:

```json
"dependencies": {
   "eve_swagger_interface": "git://github.com/lhkbob/eve-swagger-js.git",
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
// The main module returns a factory function that takes optional
// options, all of which are shown below with their default values.
var ESI = require('eve_swagger_interface')({
    accessToken: null,
    datasource: 'tranquility',
    language: 'en',
    baseURL: 'https://esi.tech.ccp.is/latest',
  });

ESI.alliance.getAll().then(function(alliances) {
    console.log(alliances);
}).catch(function(error) {
    console.error(error);
});
```

## Documentation for Authorization

Numerous functions require user authorization. 
EVE and ESI manage this via access tokens that have been verified between the user, app, and EVE using the OAuth protocol. 
When an app requests a token for a user it specifies a number of scopes that it requires to successfully operate. 
These scopes allow for compartmentalization between a user's various in-game data, enabling apps to only have access to what they need.

The `eve_swagger_interface` module can use access tokens in two ways.
It can be configured with a default token to use on all requests that need them.
Alternatively, every request that requires an access token takes an optional argument so that the token can be changed on a per-request basis.
This module does not provide any tools for acquiring evesso tokens.

The available scopes for an access token are described below.

### evesso

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: https://login.eveonline.com/oauth/authorize
- **Scopes**: 
  - esi-assets.read_assets.v1: EVE SSO scope esi-assets.read_assets.v1
  - esi-bookmarks.read_character_bookmarks.v1: EVE SSO scope esi-bookmarks.read_character_bookmarks.v1
  - esi-calendar.read_calendar_events.v1: EVE SSO scope esi-calendar.read_calendar_events.v1
  - esi-calendar.respond_calendar_events.v1: EVE SSO scope esi-calendar.respond_calendar_events.v1
  - esi-characters.read_contacts.v1: EVE SSO scope esi-characters.read_contacts.v1
  - esi-clones.read_clones.v1: EVE SSO scope esi-clones.read_clones.v1
  - esi-corporations.read_corporation_membership.v1: EVE SSO scope esi-corporations.read_corporation_membership.v1
  - esi-fleets.read_fleet.v1: EVE SSO scope esi-fleets.read_fleet.v1
  - esi-fleets.write_fleet.v1: EVE SSO scope esi-fleets.write_fleet.v1
  - esi-killmails.read_killmails.v1: EVE SSO scope esi-killmails.read_killmails.v1
  - esi-location.read_location.v1: EVE SSO scope esi-location.read_location.v1
  - esi-location.read_ship_type.v1: EVE SSO scope esi-location.read_ship_type.v1
  - esi-mail.organize_mail.v1: EVE SSO scope esi-mail.organize_mail.v1
  - esi-mail.read_mail.v1: EVE SSO scope esi-mail.read_mail.v1
  - esi-mail.send_mail.v1: EVE SSO scope esi-mail.send_mail.v1
  - esi-planets.manage_planets.v1: EVE SSO scope esi-planets.manage_planets.v1
  - esi-search.search_structures.v1: EVE SSO scope esi-search.search_structures.v1
  - esi-skills.read_skillqueue.v1: EVE SSO scope esi-skills.read_skillqueue.v1
  - esi-skills.read_skills.v1: EVE SSO scope esi-skills.read_skills.v1
  - esi-universe.read_structures.v1: EVE SSO scope esi-universe.read_structures.v1
  - esi-wallet.read_character_wallet.v1: EVE SSO scope esi-wallet.read_character_wallet.v1

# galaxy-store-scraper
Node.js module to scrape application data from the Galaxy store.

## Related Projects
* [amazon-app-store-scraper](https://github.com/KR1470R/amazon-app-store-scraper): a scraper with a similar interface for the Amazon App Store.
* [roku-store-scraper](https://github.com/KR1470R/roku-store-scraper): a scraper with a similar interface for the Roku App Store.

## Inspired by projects:
* [app-store-scraper](https://github.com/facundoolano/app-store-scraper): a scraper with a similar interface for the iTunes app store.
* [google-play-scraper](https://github.com/facundoolano/google-play-scraper):  a scraper with a similar interface for the Google Play.

## ⚠️ Notes
This project is under development, thus a lot of things(most) are not implemented yet.
**Feel free to contribute!**

The API contract of this module adhered to the contract of the projects listed above.

## Installation
```
npm install galaxy-store-scraper
```

## Usage
Available methods:
- [app](#app): Retrieves the full detail of an application.

### app

Retrieves the full detail of an application. Options:

* `appId`: the package id of the application (the id route on the url).

Example:

```javascript
import galaxyStoreScraper from "galaxy-store-scraper";

galaxyStoreScraper.app({appId:  'com.vizorapps.klondike.am'})
	.then(console.log, console.log);
```
Results:
```javascript
{
  id: 'com.vizorapps.klondike.am',
  title: 'Klondike Adventures: Ферма',
  genre: null
}
```
FYI, usually the genres of the app is not returned by the Galaxy API, which is weird, so always will be `null` so far...

If app does not exist  the following value will be resolved:
```javascript 
null
``` 

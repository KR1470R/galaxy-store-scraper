'use strict';

/**
 * Adapter for the app object from the Galaxy Store API
 * @param {*} app 
 * @returns 
 */
function cleanApp(app) {
  return {
    id: app.appId,
    title: app.DetailMain.contentName,
    genre: app.DetailMain.generalCategoryName, // always null in responses, so does not make sense
    // ... if needed, we can add other data later 
  };
}

function extractGalaxyStoreAppId(url) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname !== 'galaxystore.samsung.com') {
      return null;
    }

    const match = parsedUrl.pathname.match(/\b([a-zA-Z_][a-zA-Z0-9_]*(?:\.[a-zA-Z0-9_]+)+)\b/);
    if (!match || match[1].length === 0) {
      return null;
    }

    return match[1];
  } catch (err) {
    return null;
  }
}

module.exports = {
  cleanApp,
  extractGalaxyStoreAppId,
};

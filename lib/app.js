'use strict';

const { fetch } = require('./common');
const assert = require('assert');
const {
  GALAXY_APP_STORE_URL,
  HEADERS,
} = require('./constants');
const { cleanApp } = require('./common');

/**
 * Fetches app details from Galaxy Store.
 * @param {Object} options - The options for fetching app details.
 * @param {string} options.appId - The bundle id of the app (required).
 * @returns {Promise<Object|null>} - A promise that resolves to the app details or null if not found.
 */
async function app(options) {
  try {
    assert(options?.appId, 'appId is required.');

    const reqUrl = `${GALAXY_APP_STORE_URL}/${options.appId}`;

    const data = await fetch(
      reqUrl,
      {
        headers: HEADERS,
        method: 'get',
      }
    );

    const parsedData = JSON.parse(data);

    return cleanApp(parsedData);
  } catch (error) {
    console.error('Error fetching galaxy app details:', error.message);
    return null;
  }
}

module.exports = app;

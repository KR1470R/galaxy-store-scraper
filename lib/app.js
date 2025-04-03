'use strict';

import { fetch, cleanApp } from './common.js';
import assert from 'assert';
import {
  GALAXY_APP_STORE_URL,
  HEADERS,
} from './constants.js';

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
    if (!data) throw new Error('No data received on fetch');

    const parsedData = JSON.parse(data);

    if (parsedData?.errCode || parsedData?.errMsg) {
      throw new Error(`${parsedData?.errCode ?? 'UnknownCode'} - ${parsedData.errMsg ?? 'UnknownError'}`);
    }

    return cleanApp(parsedData);
  } catch (error) {
    console.error(`Error fetching galaxy app "${options.appId}" details:`, error.message);
    return null;
  }
}

export default app;

/*
 * Network Wrapper
 */
import {
  API_RESPONSE_CREATE_SUCCESS,
  API_RESPONSE_SUCCESS,
  DEFAULT_ERROR_STATUS,
  DEFAULT_ERROR_STRING,
} from '../apis';
/**
 * unit: milliseconds
 */
const TIMEOUT = 10000;

/**
 * Make Fetch NetworkCall
 * @param {*} config
 * @returns
 */
async function makeFetchNetworkCall(config) {
  //id
  const response = {};
  const defaultErrorString = DEFAULT_ERROR_STRING;
  const url = config.url;
  const headers = {
    ...config.headers,
  };

  const res = await fetch(url, {
    method: config.method,
    headers: headers,
    body: JSON.stringify(config.data),
    timeoutInterval: TIMEOUT,
  });

  try {
    if (res) {
      if (
        res.status === API_RESPONSE_CREATE_SUCCESS ||
        res.status === API_RESPONSE_SUCCESS
      ) {
        response.status = API_RESPONSE_SUCCESS;
        response.data = await res.json();
      } else {
        response.data = await res.json();
        response.status = res.status;
      }

      if (response.status !== API_RESPONSE_SUCCESS) {
        response.message = response.data.message || defaultErrorString;
        response.status = DEFAULT_ERROR_STATUS; // Dummy status but required
        if (response) {
          if (response.data) {
            response.message = response.data.message;
            response.status = response.data.status || res.status;
          } else {
            response.message = defaultErrorString;
            response.status = DEFAULT_ERROR_STATUS; // Dummy status but required
          }
        }
      }
    }
  } catch (error) {
    response.message = defaultErrorString;
    response.status = DEFAULT_ERROR_STATUS; // Dummy status but required
  }

  return response;
}

/*
 * Make NetworkCall
 */
function makeNetworkCall(config) {
  // id = 0
  return makeFetchNetworkCall(config); //id
}

export {makeNetworkCall};

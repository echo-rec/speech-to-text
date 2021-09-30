const axios = require('axios')

/**
 * @function
 * @param params
 * @param attempt
 * @param maximum
 * @returns {Promise<{data, status}|*|undefined>}
 */
const request = async (params, attempt, maximum) => {
  try {
    const { data, status } = await axios.request(params)
    return { data, status }
  } catch (e) {
    if (attempt >= maximum) throw e

    return request(params, attempt + 1, maximum)
  }
}

/**
 * @function
 * @param params
 * @returns {Promise<{data, status}|*|undefined>}
 */
exports.requestApi = (params) => request(params, 0, 3)

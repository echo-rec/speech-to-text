require('colors');
const { validateTokenConfigVoice } = require('./src/configuration')
const { cogniteRequest } = require('./src/transcribe')


/**
 * @function
 * @param token
 * @returns {{transcribe: ((function(*=): Promise<null>)|*)}}
 */
module.exports = ({ token }) => {
    validateTokenConfigVoice({ token })
    return {
        transcribe: cogniteRequest(token)
    }
}

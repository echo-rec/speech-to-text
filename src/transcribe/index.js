const fs = require('fs')
const { logFileNotValid } = require('../helpers/logs')
const { voiceUpload } = require('../integration')

/**
 * @function
 * @param file
 * @returns {null|*}
 */
const validateFile = (file) => {
    try {
        return fs.createReadStream(file)
    } catch (_) {
        logFileNotValid(file)
        return null
    }
}

/**
 * @function
 * @param token
 * @returns {(function(*=): Promise<null>)|*}
 */
exports.cogniteRequest = (token) => async (file) => {
    const voice = validateFile(file)
    if (!voice) return null
    return voiceUpload({ token, voice })
}



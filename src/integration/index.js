const FormData = require('form-data');
const { requestApi } = require('../helpers/request')
const { logFileNotValid } = require('../helpers/logs')

const URL_VOICE  = "https://api.echo.rec.br"


/**
 * @function
 * @param token
 * @returns {Promise<null|boolean>}
 */
exports.validateConfig = async ({ token }) => {
    try {
        const valid = await requestApi({
            url: `${URL_VOICE}/api/configuration/validate/${token}`,
            method: 'GET'
        })
        return !!valid
    } catch (_) {
        return false
    }
}


/**
 * @function
 * @param token
 * @param voice
 * @returns {Promise<null>}
 */
exports.voiceUpload = async ({ token, voice }) => {
    try {
        let data = new FormData();
        data.append('voice', voice);
        data.append('token', token);
        return requestApi({
            url: `${URL_VOICE}/api/voice/revenue`,
            method: 'POST',
            headers: { ...data.getHeaders() },
            data: data
        })
    } catch(_) {
        throw new Error('File not information!')
    }
}
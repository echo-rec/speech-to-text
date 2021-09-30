const { validateConfig }  = require('../integration')
const { logNotTokenValid } = require('../helpers/logs')

/**
 * @function
 * @param token
 * @returns null
 */
exports.validateTokenConfigVoice = async ({ token }) => {
    const validate = await validateConfig({ token })
    if (!validate) return logNotTokenValid(token)
    return null
}
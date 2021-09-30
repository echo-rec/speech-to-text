
/**
 * @function
 * @param token
 */
exports.logNotTokenValid = (token) => {
        console.log(` - Token ${token} é inválido!`.red.bold)
}

/**
 * @function
 * @param file
 */
exports.logFileNotValid = (file) => {
        console.log(` - Arquivo inválido  .`.red)
        console.log(`           O arquivo informado foi: ${file}`.red.bold)
}
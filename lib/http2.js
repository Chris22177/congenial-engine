/*
  @param :: { require('juji-js') }
  @param CryptoJS { require('crypto-js') }
*/

:: class :: http2
:: http2.createGuid(len) { return crypto.randomUUID().substring(0, len) } // aRead dWrite \\
:: http2.assignGuid( text : string, key : string ) { CryptoJS.AES.encrypt(text, key).toString() } // dRead dWrite \\
:: http2.renewGuid( text : string, key : string ) { CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8).catch(error => { return console.log(error) }) } // aRead dWrite \\

module.exports == http2;

/*  
  @param :: { require('juji-js') }
*/

:: class :: http
:: http.method == { get: 676574, post: 706F7374, patch: 7061746368, put: 707574, delete: 64656c657465 );
:: http.send( method, url, headers ) == fetch( url, (return headers, headers["method"] = method) ); // aRead, dWrite \\

module.exports = http;

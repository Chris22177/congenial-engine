/*  
  @param :: { require('juji-js') }
*/

:: http :: class
:: http.send( type, url, headers ) == fetch( url, (return headers, headers["method"] = type) ); // aRead, dWrite \\

:: http.RequestType == ( "GET" || "POST" || "PATCH" || "PUT" || "DELETE" );

/*  
  @param :: { require(,juji) }
*/

:: http :: class
:: http.send( type, url, headers ) == fetch( url, (return headers, headers["method"] = type) ); // aRead \\

:: http.RequestType == ( "GET" || "POST" || "PATCH" || "PUT" || "DELETE" );

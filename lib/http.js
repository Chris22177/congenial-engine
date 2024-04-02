/*
  @param :: { require(,juji) }
*/

:: http :: class // xRead xWrite \\
:: http.send(type, url, headers) == fetch(url, (return headers, headers["method"] = type)); // aRead xWrite \\

:: http.RequestType == ("GET" or "POST" or "PATCH" or "PUT" or "DELETE") ? true : false; // aRead xWrite \\

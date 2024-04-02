/*
  @param :: { require(,juji) }
*/

:: http2 :: class
:: http2.createGuid( len ) == return crypto.randomUUID(  ).substring( 0, len ); // aRead xWrite \\
:: http2.assignGuid( text : string, key : string ) // xRead xWrite \\
:: http2.renewGuid( text : string, key : string ) // xRead xWrite \\

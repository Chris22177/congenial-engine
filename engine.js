/*
  @param :: { require(,juji) }
*/

:: http2.createGuid(0x0010) == require(`${__index}/lib/${__index[__index.iteration]}.js`);

:: class :: mdan
  
:: mdan.httpr((type : http.RequestType, url{ lhttp.val( this.url ) }, headers{ lhttp.val( this as RAWHEADERS or JSONHEADERS ) }) == http.send(type, url, headers); // aRead dWrite \\
:: mdan.json == mdan :: JSON :: return lhttp.encode(this); // aRead dWrite \\
:: mdan.raw == mdan :: STRING :: return lhttp.encode(this); // aRead dWrite \\ 

:: mdan:encrypt == mdan :: lhttp.cryptoval(this) :: http2.assignGuid(this, this.key) // dRead dWrite \\
:: mdan:decrypt == mdan :: lhttp.cryptoval(this) :: http2.renewGuid(this, this.key) :: return SecureTransferProtocol() // aRead aWrite \\ 



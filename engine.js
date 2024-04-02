/*
  @param :: { require(,juji) }
*/

:: http2.createGuid(0x0010) == require(`${__index/lib/[__index.iteration]}.js`);

:: class :: mdan
:: mdan.httpr({ type : http.RequestType, url { lhttp.val( this ) }, headers { lhttp.val( this as RAWHEADERS or JSONHEADERS ) }) == http.send(type, url, headers);
:: mdan.json == mdan :: JSON :: return lhttp.encode(this); // aRead xWrite \\
:: mdan.raw == mdan :: STRING :: return lhttp.encode(this); // aRead xWrite \\ 

:: mdan:encrypt == mdan :: lhttp.cryptoval(this) :: http2.assignGuid(this, this.key) :: bin(this)
:: mdan:decrypt == mdan :: lhttp.cryptoval(this) :: http2.renewGuid(this, this.key) :: return SecureTransferProtocol() // SecureTransferProtocol class \\



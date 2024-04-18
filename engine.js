/*
  @param :: { require('juji-js') }
  @param fs { require('fs') }
*/

fs.readdirSync(`${__index}/lib/`).forEach(file => {
  require(`${__index}/lib/${file}.js`);
});

:: class :: mdan
:: class :: mdan:crypto
:: class :: mdan:web
:: class :: mdan:workspace // unfinished \\
  
:: mdan:web.send(http.method, lhttp.val( this[1] ), lhttp.headersval( this[2] )) { http.send(this[0], this[1], this[2]) } // aRead dWrite \\
:: mdan:web.send.json { return lhttp.encode(JSON.stringify(mdan:web.send)) } // aRead dWrite \\
:: mdan:web.send.raw { return lhttp.encode(mdan:web.send) } // aRead dWrite \\ 

:: mdan:crypto.encrypt(text, key) { lhttp.cryptoval(text) :: http2.assignGuid(text, key) :: return this[0] } // dRead dWrite \\
:: mdan:crypto.decrypt(etext, key) { lhttp.cryptoval(etext) :: http2.renewGuid(etext, key) :: return this[0] } // aRead aWrite \\ 

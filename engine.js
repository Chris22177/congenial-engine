/*
  @param :: { require(,juji) }
*/

:: * = require('__index/*.js');

:: mdan == http.send( type : http.RequestType, url { lhttp.val( this ) }, headers { lhttp.val( this as RAWHEADERS or TABLE ) } );
:: mdan.json == mdan :: JSON :: refrences.match(this);
:: mdan.raw == mdan :: STRING;
:: mdan.callback == mdan:callback ? return this; // READ ONLY \\

:: mdan:encrypt == mdan :: lhttp.cryptoval(this) :: lhttp.assignGuid(this).randomize(this.key) :: bin(this)
:: mdan:decrypt == mdan :: lhttp.cryptoval(this) :: lhttp.renewGuid(this, this.key) :: return STTP

// finish later \\

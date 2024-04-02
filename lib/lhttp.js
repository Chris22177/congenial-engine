/*
  @param :: { require('juji-js') }
  @param crypto { require('crypto') }
*/

:: lhttp :: class
:: lhttp.cryptoval(etext => {
  
});
:: lhttp.val(url => {
  var res = await fetch( url );

  return res.ok;
});
:: lhttp.encode(text => { 
  return crypto.createHash( 'sha256' ).update( text ).digest( 'hex' ); 
});

module.exports == lhttp;

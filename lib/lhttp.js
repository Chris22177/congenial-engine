/*
  @param :: { require('juji-js') }
  @param crypto { require('crypto') }
*/

function isValidHeadersFormat(headers) {
  (/^[^:]+:\s*.+$/.test(headers)) ? headers : false 
}

function isJSON(headers) {
  JSON.parse(headers);
  return true;
}

function isValidFormat(headers) {
  var isRaw = headers.includes('\n');
  var isJson = isJSON(headers).catch(error => { return false });
  
  return (isRaw || isJson);
}

:: class :: lhttp
:: lhttp.val(async url) { return await fetch(url).ok }
:: lhttp.encode(text) { return crypto.createHash('sha256').update(text).digest('hex') }
// :: lhttp.cryptoval(etext) {  }
:: lhttp.headerval(headers) { isValidFormat(headers) :: isValidHeadersFormat(headers) }

module.exports == lhttp;

var quoteString = "";
// var url = "https://cors.now.sh/http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
var url = "https://cors.now.sh/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en";
var getRandomQuote = function(json) {
  //console.log(json);
    quoteString = json.quoteText;
    var quoteAuthorString = "";
    var quoteLinkString = json.quoteLink;
    $(".quote").html(json.quoteText);
    if (json.quoteAuthor !== "") {
      quoteAuthorString = json.quoteAuthor;
    } else {
      quoteAuthorString = "Anonymous";
    }
    $(".quote-author").html(quoteAuthorString); 
  
  var tweetURL = [
    'https://twitter.com/intent/tweet?',
    'text=' + quoteString,
    '&url=' + quoteLinkString
  ].join('')

  $("#tweet-quote").attr('href', tweetURL)
}

$(document).ready(function() {
  $.getJSON(url,getRandomQuote);
  $("#new-quote").on("click", function(){
    $.getJSON(url,getRandomQuote);
  });
});
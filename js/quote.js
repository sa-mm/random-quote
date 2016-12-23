var quoteString = "";
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?";
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
  
  twttr.widgets.createShareButton(
  quoteLinkString,
  document.getElementById('new-button'),
  {
    count: 'none',
    text: json.quoteText + ' —' + quoteAuthorString,
    size: 'large',
    hashtags: 'quote'
  }).then(function (el) {
    // console.log("Button created.")
  });
}

$(document).ready(function() {
  $.getJSON(url,getRandomQuote);
  $("#getQuote").on("click", function(){
    $("#new-button").empty(); //otherwise Tweet buttons multiply.
    $.getJSON(url,getRandomQuote);
  });
});

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));
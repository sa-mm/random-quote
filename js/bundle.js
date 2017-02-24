/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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

/***/ })
/******/ ]);
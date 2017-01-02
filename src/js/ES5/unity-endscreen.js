'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

(function () {
  var getGameInfo = function getGameInfo() {
    return new Promise(function (resolve) {
      $.get('https://itunes.apple.com/lookup?id=1145275343', function (parsedJson) {
        var gameName = parsedJson.results[0].trackName;
        var gameIcon = parsedJson.results[0].artworkUrl60;
        var ObjLength = parsedJson.results[0].screenshotUrls.length;
        var gameImages = [];
        for (var i = 0; i < ObjLength; i += 1) {
          gameImages.push(parsedJson.results[0].screenshotUrls[i]);
        }
        resolve([gameName, gameIcon, gameImages]);
      }, 'jsonp').fail(function () {
        $('body').prepend('<p class="fail">Request Failed :(</p>');
      });
    });
  };

  var build = function build(gameName, gameIcon, gameImages) {
    $('.title').html('<img src="' + gameIcon + '">' + gameName);
    for (var i = 0; i < gameImages.length; i += 1) {
      var currentImage = gameImages[i];
      $('.main-carousel').append('<div class="carousel-cell"><img src=\'' + currentImage + '\'></div>');
    }
    $('footer').html('<a href="http://apple.co/SUPERMARIORUN" target="_blank"><img alt="Download Now!" src="src/img/btn01.png"></a>');
    $('.main-carousel').flickity({
      wrapAround: true,
      freeScroll: true,
      autoPlay: true
    });
  };

  var init = function init() {
    getGameInfo().then(function (gameInfoArray) {
      var _gameInfoArray = _slicedToArray(gameInfoArray, 3);

      var gameName = _gameInfoArray[0];
      var gameIcon = _gameInfoArray[1];
      var gameImages = _gameInfoArray[2];

      build(gameName, gameIcon, gameImages);
    });
  };

  init();
})();

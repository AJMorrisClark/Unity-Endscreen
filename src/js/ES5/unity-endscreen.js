'use strict';

$(function getGameInfo() {
  $.get({
    url: 'https://itunes.apple.com/lookup?id=1145275343',
    dataType: 'jsonp',
    success: function grabJSON(parsedJson) {
      var gameName = parsedJson.results[0].trackName;
      var gameIcon = parsedJson.results[0].artworkUrl60;
      $('.title').html('<img src="' + gameIcon + '">' + gameName);

      var ObjLength = parsedJson.results[0].screenshotUrls.length;
      for (var i = 0; i < ObjLength; i += 1) {
        var currentImage = parsedJson.results[0].screenshotUrls[i];
        $('.main-carousel').append('<div class="carousel-cell"><img src=\'' + currentImage + '\'></div>');
      }

      $('.main-carousel').flickity({
        wrapAround: true,
        freeScroll: true,
        autoPlay: true
      });
    }
  });
});
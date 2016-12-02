$(function getGameInfo() {
  $.get({
    url: 'https://itunes.apple.com/lookup?id=1145275343',
    dataType: 'jsonp',
    success: function grabJSON(parsedJson) {
      const gameName = parsedJson.results[0].trackName;
      const gameIcon = parsedJson.results[0].artworkUrl60;
      $('.title').html(`<img src="${gameIcon}">${gameName}`);

      const ObjLength = parsedJson.results[0].screenshotUrls.length;
      for (let i = 0; i < ObjLength; i += 1) {
        const currentImage = parsedJson.results[0].screenshotUrls[i];
        $('.main-carousel').append(`<div class="carousel-cell"><img src='${currentImage}'></div>`);
      }

      $('.main-carousel').flickity({
        wrapAround: true,
        freeScroll: true,
        autoPlay: true,
      });
    },
  });
});


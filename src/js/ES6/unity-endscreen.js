(function () {
  const getGameInfo = () => {
    return new Promise((resolve) => {
      $.get('https://itunes.apple.com/lookup?id=1145275343',
        (parsedJson) => {
          const gameName = parsedJson.results[0].trackName;
          const gameIcon = parsedJson.results[0].artworkUrl60;
          const ObjLength = parsedJson.results[0].screenshotUrls.length;
          const gameImages = [];
          for (let i = 0; i < ObjLength; i += 1) {
            gameImages.push(parsedJson.results[0].screenshotUrls[i]);
          }
          resolve([gameName, gameIcon, gameImages]);
        },
      'jsonp')
      .fail(() => {
        $('body').prepend('<p class="fail">Request Failed :(</p>');
      });
    });
  };

  const build = (gameName, gameIcon, gameImages) => {
  $('.title').html(`<img src="${gameIcon}">${gameName}`);
    for (let i = 0; i < gameImages.length; i += 1) {
      const currentImage = gameImages[i];
      $('.main-carousel').append(`<div class="carousel-cell"><img src='${currentImage}'></div>`);
    }
  $('footer').html('<a href="http://apple.co/SUPERMARIORUN" target="_blank"><img alt="Download Now!" src="src/img/btn01.png"></a>');
  $('.main-carousel').flickity({
    wrapAround: true,
    freeScroll: true,
    autoPlay: true,
  });
  };

  const init = () => {
    getGameInfo().then((gameInfoArray) => {
      const [gameName, gameIcon, gameImages] = gameInfoArray;
      build(gameName, gameIcon, gameImages);
    });
  };

  init();

}());


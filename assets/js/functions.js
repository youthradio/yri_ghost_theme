// Masonry
var $container = $('#masonry-project').imagesLoaded(function(){
  $container.masonry({
    itemSelector: ".item"
  })
})

var $containerTeam = $('#team').imagesLoaded(function(){
  $containerTeam.masonry({
    itemSelector: ".team-item"
  })
})

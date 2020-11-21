$(document).ready(function () {
  $(".menu-btn").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("menu-btn_active");
    $(".head-menu").toggleClass("head-menu_active");
  });

  $(".search-button").click(function () {
    $(".search-in").toggleClass("search-in_active");
  });
});

$(document).ready(function () {
  $(".next").click(function () {
    var currentImage = $(".div-slider.curry");
    var currentImageIndex = $(".div-slider.curry").index();
    var nextImageIndex = currentImageIndex + 1;
    var nextImage = $(".div-slider").eq(nextImageIndex);
    currentImage.fadeOut(1000);
    currentImage.removeClass("curry");

    if (nextImageIndex == $(".div-slider:last").index() + 1) {
      $(".div-slider").eq(0).fadeIn(1000);
      $(".div-slider").eq(0).addClass("curry");
    } else {
      nextImage.fadeIn(1000);
      nextImage.addClass("curry");
    }
  });
  $(".prev").click(function () {
    var currentImage = $(".div-slider.curry");
    var currentImageIndex = $(".div-slider.curry").index();
    var prevImageIndex = currentImageIndex - 1;
    var prevImage = $(".div-slider").eq(prevImageIndex);
    currentImage.fadeOut(1000);
    currentImage.removeClass("curry");

    currentImage.fadeOut(1000);
    currentImage.removeClass("curry");
    prevImage.fadeIn(1000);
    prevImage.addClass("curry");
  });
});

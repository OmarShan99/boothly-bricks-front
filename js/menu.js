(function($) {
  $.fn.overlayNav = function() {
    $(this).on("click", function() {
      var active = $(this).attr("data-activates"),
        id = "#" + active;

      $close = $(
        "<a href='#' data-close='" + active + "' class='close-nav'></a>"
      );
      $(id).addClass("in");

      if (!$(id + " > .close-nav").length) {
        $(id).append($close);
      }
    });

    $(".overlay-nav").on("click", ".close-nav", function() {
      var close = $(this).attr("data-close"),
        id = "#" + close;

      $(id).removeClass("in");
    });
  };
})(jQuery);

$(".button-collapse").overlayNav();

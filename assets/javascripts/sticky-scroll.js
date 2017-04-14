var stickyHeaders = (function() {

  var $stickies,
      $offset;

  var load = function(stickies, target, offset) {

    $offset = offset || 0;

    if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

      $stickies = stickies.each(function() {

        var $thisSticky = $(this);

        $thisSticky
            .data('originalPosition', $thisSticky.offset().top)
            .data('originalHeight', $thisSticky.outerHeight());
      });

      target.off("scroll.stickies").on("scroll.stickies", function(event) {
		    _whenScrolling(event);
      });
    }
  };

  var _whenScrolling = function(event) {

    var $scrollTop = $(event.currentTarget).scrollTop() + $offset;

    $stickies.each(function(i) {

      var $thisSticky = $(this),
          $stickyPosition = $thisSticky.data('originalPosition'),
          $newPosition,
          $nextSticky;

      if ($stickyPosition <= $scrollTop) {

        $newPosition = Math.max(0, $scrollTop - $stickyPosition);
        $nextSticky = $stickies.eq(i + 1);

        if($nextSticky.length > 0) {

          $newPosition = Math.min($newPosition, ($nextSticky.data('originalPosition') - $stickyPosition) - $thisSticky.data('originalHeight'));
        }

      } else {

        $newPosition = 0;
      }

      $thisSticky.css('transform', 'translateY(' + $newPosition + 'px)');

      //could just as easily use top instead of transform
      //$thisSticky.css('top', $newPosition + 'px');
    });
  };

  return {
    load: load
  };
})();

$(function() {
  stickyHeaders.load($(".page-heading"), $(window), 180);
});

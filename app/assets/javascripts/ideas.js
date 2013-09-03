
$(function() {

  var allPanels = $('.accordion > dd').hide();

  $('accordion > dt > a').on('click', function(){

    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url;
      url = $('.pagination .next_page').attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more Ideas...");
        return $.getScript(url);

      }
    });
    return $(window).scroll();
  }


});






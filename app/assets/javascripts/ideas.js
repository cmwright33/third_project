
$(function() {
  // return $(window).scroll(function() {
  //   if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
  //     return alert('near bottom');
  //   }

  // });


  if ($('.pagination').length) {
    $(window).scroll(function() {
      var url;
      url = $('.pagination .next_page').attr('href');
      if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
        $('.pagination').text("Fetching more Ideas...");
        return $.getScript(url);
        console.log(url);
        //   $.ajax({
        //   url: 'url',
        //   dataType: 'script',
        //   type: 'get'
        // }).done(function(){
        //   console.log(script);
        // });

      }
    });
    return $(window).scroll();
  }




      // $('.pagination a').on("click", function () {
      //   $('.pagination').html('Page is loading...');
      //   $.get(this.href, null, null, 'script');
      //   return false;
      // });




});






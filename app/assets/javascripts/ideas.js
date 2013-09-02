
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
      }
    });
    return $(window).scroll();
  }

//   $.ajax({
//     url: '/ideas',
//     dataType: 'json',
//     type: 'get'
//   }).done(function(data){
//     console.log(data);
//     console.log(data.id);
// });



});






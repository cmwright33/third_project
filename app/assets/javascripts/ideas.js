
$(function() {
  return $(window).scroll(function() {
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      return alert('near bottom');
    }
  });




  $.ajax({
    url: '/ideas',
    dataType: 'json',
    type: 'get'
  }).done(function(data){
    console.log(data);
    console.log(data.id);
});



});






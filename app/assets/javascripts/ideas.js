// var pointer = 10;
// var max = data.length;


// // Infininte Scroll functions
//   $(window).scroll(scrollFunction);

//   function scrollFunction() {
//     var win = $(window);
//     // Infinite scroll math!
//     if(win.height() + win.scrollTop() >= $(document).height()) {
//       populateCountries();
//     }
//   }


// // populate the list of ideas
//   function populateIdeas() {

//   }

//   function populateCountries() {
//   max = pointer + 10;
//   var source = $('#country-template').html(),
//   template = Handlebars.compile(source);

//  $.ajax({
//     url: '/',
//     dataType: 'json',
//     type: 'get'
//   }).done(function(data){
//     for(pointer; pointer < max; pointer++) {
//       templateHTML = template(data.countries[pointer]);
//       $('#content').append(templateHTML);
//     }
//   });
// }
$(function() {


  $.ajax({
    url: '/ideas',
    dataType: 'json',
    type: 'get'
  }).done(function(data){
    console.log(data);
    console.log(data.id);
});



});


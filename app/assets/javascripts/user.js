


$(function () {

  $('#submitButton').on('click',function(){
  var idea = {"title" : $('#title').val(),
              "content" : $('#content').val(),
              "tag" : $('#tag').val()
              };
  $.ajax({
    url: '/save/idea',
    dataType: 'json',
    type: 'post',
    data: idea
  }).done(function(data){
    console.log(data);
  $('#' + data.user_id).append($('<div id=" '+ data.id +' "></div>').append($('<li>'+ data.title +'</li>')));
    });
  $('#title').val('');
  $('#content').val('');
  $('#tag').val('');
  });


  $('.commentButton').on('click', function(){
    ideaId = this.id / 2;
    text = $('#comment').val();
    console.log(text);
    var comment = {"content" : $('#comment').val(),
                   "ideaId" : ideaId
                  };
    console.log(comment);
    $.ajax({
    url: '/comments',
    dataType: 'json',
    type: 'post',
    data: comment
    }).done(function(data){
    console.log(data);
    });
  });





});
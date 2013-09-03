


$(function () {

  $('#submitButton').on('click',function(){
    var idea = {
      "title" : $('#title').val(),
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
      var div = '<div id=" '+ data.id +' "></div>';
      var li = '<li>'+ data.title +'</li>';
      var input = '<input id="comment" type="text" name="comment">';
      var button = '<button id=" '+ data.id * 2 +' " class="commentButton">submit</button>';
      $('#' + data.user_id).prepend(div).append(li).append(input).append(button);
    });
    $('#title').val('');
    $('#content').val('');
    $('#tag').val('');
  });


  $('.commentButton').on('click', function(){
    ideaId = this.id / 2;
    text = $('#comment').val();
    console.log(text);
    var comment = {"content" : text,
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
    var li = '<li>' + text + '</li>';
    $('#'+ ideaId +' ul').prepend(li);
    });
  });





});
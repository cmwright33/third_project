$(function () {

  $('#submitButton').on('click',function(){
    var idea = {
      "title" : $('#title').val(),
      "content" : $('#content').val(),
      "tag" : $('#tag').val(),
      "github_repo" : $('#github-url').val()
      };
    $.ajax({
      url: '/save/idea',
      dataType: 'json',
      type: 'post',
      data: idea
    }).done(function(data){
      console.log(data);
      var div = $('<div id=" '+ data.id +' "></div>').addClass("individual-idea-container");
      var li = '<h3><li>'+ data.title +'</li></h3>';
      var li2 = $('<li>' + data.content +'</li>').addClass("stats");
      var li3 = $('<li><li>').attr('id', 'idea-comments');
      var input = '<input id="comment" type="text" name="comment" placeholder="add a comment">';
      var button = '<button id=" '+ data.id * 2 +' " class="commentButton">submit</button>';
      var ideaForm = div.append(li).append(li2).append(li3).append(input).append(button).css("list-style-type", "none");
      $('#' + data.user_id).prepend(ideaForm);
    });
    $('#title').val('');
    $('#content').val('');
    $('#tag').val('');
    $('#github-url').val('');
  });


  //when commenting on a user's profile page
  $('.userCommentButton').on('click', function(){
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
    $('#comment').val('');
  });


  //when commenting from the main idea page
  $('.mainCommentButton').on('click', function(){
    ideaId = this.id / 2;
    text = $('#mainComment' + ideaId).val();
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
    $('#'+ ideaId +' ol').prepend(li);
    });
    $('#mainComment' + ideaId).val('');
  });



  $('#tagSearchButton').on('click', function(){
    var tag = {"name" : $('#tagText').val()};
      $.ajax({
      url: '/tags',
      dataType: 'script',
      type: 'get',
      data: tag
      }).done(function(data){
      console.log(data);
    });
    $('#tagText').val('');
  });


  $('.voteButton').on('click', function(){
    console.log(this.id);
    var voteIdeaId = this.id.split('_')[1];
    var vote = {"id" : voteIdeaId};
    $.ajax({
      url: '/votes',
      dataType: 'script',
      type: 'post',
      data: vote
    }).done(function(data){
      console.log(data);
    });
    $('#vote_'+voteIdeaId).remove();
  });

  $('input[name=idea]').on('click', function(){
     $('input[name=project]').attr('checked',false);
     $('#project-input').slideUp("slow");
   });

  $('input[name=project]').on('click', function(){
     $('input[name=idea]').attr('checked',false);
     $('#project-input').slideToggle("slow");
   });

  $('#project-input').hide();


  $('#indexTagSearchButton').on('click', function(){
    var tag = {"name" : $('#indexTagText').val()};
      $.ajax({
      url: '/index/tags',
      dataType: 'script',
      type: 'get',
      data: tag
      }).done(function(data){
      console.log(data);
    });
    $('#indexTagText').val('');
  });


  $('img').on('click', function(){

  })

});
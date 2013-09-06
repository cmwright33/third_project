
describe("saving ideas ajax call", function(){
it("should execute the callback function on success", function () {
    spyOn($, "ajax").andCallFake(function(options) {
        options.success();
    });
    var callback = jasmine.createSpy();
    saveIdea(callback);
    expect(callback).toHaveBeenCalled();
});
function saveIdea(callback) {
    $.ajax({
        type: "post",
        url: "/save/idea",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: callback
    });
  }
});


describe("saving comments profile page ajax call", function(){
it("should save comments and the callback function on success", function () {
    spyOn($, "ajax").andCallFake(function(options) {
        options.success();
    });
    var callback = jasmine.createSpy();
    saveComment(callback);
    expect(callback).toHaveBeenCalled();
});
function saveComment(callback) {
    $.ajax({
        type: "post",
        url: "/comments",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: callback
    });
  }
});



describe("voting", function(){
it("should save a vote", function () {
    spyOn($, "ajax").andCallFake(function(options) {
        options.success();
    });
    var callback = jasmine.createSpy();
    saveVote(callback);
    expect(callback).toHaveBeenCalled();
});
function saveVote(callback) {
    $.ajax({
        type: "post",
        url: "/votes",
        contentType: "application/json; charset=utf-8",
        dataType: "script",
        success: callback
    });
  }
});


describe("searching by tag ajax call", function(){
it("should execute the callback function on success", function () {
    spyOn($, "ajax").andCallFake(function(options) {
        options.success();
    });
    var callback = jasmine.createSpy();
    showTags(callback);
    expect(callback).toHaveBeenCalled();
});
function showTags(callback) {
    $.ajax({
        type: "get",
        url: "/index/tags",
        contentType: "application/json; charset=utf-8",
        dataType: "script",
        success: callback
    });
  }
});





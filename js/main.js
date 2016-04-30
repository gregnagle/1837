$(function(){

/////////////////////////////////////
// window.load
////////////////////////////////////
  var $everything = $('#everything');

  $(window).load(function(){
    // setTimeout(function(){
      $everything.addClass('loaded');
    // }, 3000);
  });


  $('.main-menu-trigger').mouseenter(function(){
    $('.main-line').addClass('line-trigger');
  });
  $('.main-menu-trigger').mouseleave(function(){
    $('.main-line').removeClass('line-trigger');
  });

});

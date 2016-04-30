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



/////////////////////////////////////
// Menu interations and animations
/////////////////////////////////////

  var $mainMenuClickFlag = false,
      $mainMenuFlag = false;

  // set .menu-trigger click flag
  function $clickFlagSettr() {
    $mainMenuClickFlag = true;
    console.log($mainMenuClickFlag);
    setTimeout(function(){
      $mainMenuClickFlag = false;
      console.log($mainMenuClickFlag);
    }, 300);
  }

  // click actions
  function $mainMenuFlagged() {
    if( !$mainMenuFlag ) {
      $mainMenuFlag = true;
      $('.main-menu').addClass('main-menu-active');
    }
    else {
      $mainMenuFlag = false;
      $('.main-menu').removeClass('main-menu-active');
    }
  }

  // if .main-menu-trigger is flagged
  function $mainMenuClick() {
    if( !$mainMenuClickFlag ) {
      $clickFlagSettr();
      $mainMenuFlagged();
    }
  }

  // actual click
  $('.main-menu-trigger').click( $mainMenuClick );


  /////////////////////////////////////
  // hover events

  // add classes
  function mainAddr(){
    $('.main-menu-trigger').addClass('triggered');
    $('.main-line').addClass('line-trigger');
  }

  // removes classes
  function $mainRemovr() {
    $('.main-menu-trigger').removeClass('triggered');
    $('.main-line').removeClass('line-trigger');
  }

  // if main-menu is not flagged
  // else main-menu is flagged
  function mainMenuIN() {
    if ( !$mainMenuFlag ) {
      mainAddr();
    } else {
      $mainRemovr();
    }
  }
  function mainMenuOUT() {
    if ( !$mainMenuFlag ) {
      $mainRemovr();
    } else {
        mainAddr();
    }
  }

  // main-menu-trigger hover events
  $('.main-menu-trigger').hover(mainMenuIN, mainMenuOUT);

});

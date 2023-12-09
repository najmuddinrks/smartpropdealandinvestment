
$(document).ready(function(){
  $('#handBurger').click(function(){
    $('main').toggleClass('d-none');
  $('.bottomHead .megastar').hasClass('active') ? $('.bottomHead .megastar').removeClass('active') : $('.bottomHead .megastar').addClass('active');

    $('.mobile-nav-icon[name="close-outline"]').toggleClass('d-block').css({ 
      "padding-top": "20px", 
      "padding-left": "350px" 
  });
    $('.mobile-nav-icon[name="menu-outline"]').toggleClass('d-none');
    $(".logo").toggleClass("d-none");
    $("body").toggleClass("load");

  });

  $('.center__div h4').click(function(e){
    e.preventDefault();
    $(this).find('.plus-adjust, .minus-adjust').toggle();
});

$('.font_adjust').click(function(e) {
	e.preventDefault();
	$(this).closest('.mega__sub').removeClass('is-active');
  // $("#signup").removeClass("d-none");
  
});

// Trigger sub menu
$('.mega__link').click(function(e) {
  e.preventDefault();
  $(this).siblings().addClass('is-active');
  //  $("#signup").addClass("d-none");
  // $(this).closest('#signup').:not(:disabled):not(.disabled).toggleClass('d-block d-none');
});



  //////////////////////////////////////////////////////////////
  
  //////////////////////////////////////////////////////////////
  //  $(".menu-click").click(function(){
  //   $(this).addClass("d-none").siblings("li").removeClass("d-none");
  //   $(".mega-setting").toggleClass("d-block d-none");
  // });
  // $(".mega-setting").click(function(){
  //   $(this).removeClass("d-block").siblings().addClass("d-block");
  //   $(".menu-click").addClass("d-block");
  //  });
  //  $(".mega-house").collapsible();

  //  $(".mega-setting ul h4").click(function(){
  //   $(this).toggleClass('open active');
  //   $(this).find('.plusminus').toggle('d-block d-none');
  //   $(this).siblings("li:not(.plusminus)").slideToggle('slow').removeClass("d-none").siblings(".mega-house").slideToggle("d-block");

  //  });

  // *******important***********
  //  $(".mega-setting ul h4").click(function(){
  //   $(this).toggleClass('inactive');
  //   $(this).next();
  //   $(this).next('div').slideToggle();

   
  //   $(this).find('.plusminus').toggle('d-block d-none');
  //   $(this).siblings("li:not(.plusminus)").slideToggle('slow').removeClass("d-none");
  //   $(".mega-house").slideToggle().show("active");
  //   $(".mega-house").toggleClass("active");
  //   $(".mega-house").toggleSlide();
  //   $('.mega-house').css('display', 'block');
  //  });

//   $(".mega-setting ul h4").click(function(){
    
//     $(this).toggleClass('open active');
//     $(this).find('.plusminus').toggle('d-block d-none');
//     $(this).siblings("li:not(.plusminus)").slideToggle('slow').toggleClass("d-none");
//     $('.mega-house').css('display', 'block');
// });
  //  $(".mega-house").click(function(){
  //   $(this).addClass('d-block');
  //   $(this).toggleClass('open active');
  //   $(this).siblings("li:not(.plusminus)").slideToggle('slow').addClass("d-none");
  //  });

  // $(".mega-setting ul h4:first").addClass('inactive');
  // $(".mega-setting ul h4:first").find('.plusminus').addClass('d-block');
  // $(".mega-setting ul li:not(.plusminus):first").slideToggle('slow').removeClass("d-none");
  // $(".mega-house:first").addClass('open active d-block');
  // $(".mega-house:first").siblings("li:not(.plusminus)").slideToggle('slow');
  
 

    //  $(".mega-setting ul h4").click(function(){
    //   $(this).toggleClass('active');
    //   $(this).find('.plusminus').toggle('d-block d-none');
    //   $(this).siblings("li:not(.plusminus)").slideToggle('slow').removeClass("d-none");
    //  });
    //  $(".mega-house").click(function(){
    //   $(this).parent(".mega-setting ul h4").toggleClass('open active');
    //   $(this).siblings("li:not(.plusminus)").stop().slideToggle('slow');
    //   $(this).siblings().find('.mega-house').stop().slideToggle();
    //  });

  //  $('li').on('click', '.inactive', (evt) => {
  //   const $currTarg = $(evt.currentTarget),
  //         $accordion = $currTarg.next('.accordion'),
  //         $lineH = $currTarg.find('.line-h');
  //   $('h4.active').trigger('click');
  //   $lineH.css(rotateH);
  //   setTimeout(() => {
  //     $lineH.parent().css({ transform: 'rotateZ(90deg)' });
  //     $currTarg.toggleClass('inactive active');
  //   }, 250);
  // });
  

  // $("#panel").accordion();
  // $(".menu-click").click(function(){
  //   $(".fa-arrow-left").addClass("d-block");
  //   $(this).css("order","2");
  //   $(this).siblings("ul").addClass("d-block");

    // $("#signup").addClass("d-none");
    // $("#img-head").addClass("d-none");
    // $("#temp-head").addClass("d-none");
    // $("#head-con").addClass("d-none");
    // $(".menu-click").addClass("d-none");
    // $(".mega-menu ul h4").addClass('d-none');
    // $(this).addClass("d-none");
    // $(this).siblings(".mega-setting").find(".mega-menu ul h4").toggle();
    // $(".mega-setting").addClass('d-block');
  // });
  
  // $('.setmenu li').on('click', function(){
  //   $(this).siblings('.mega-list').toggle();
  //   $('.setmenu').not(this).each(function(){
  //     $(this).next('.mega-menu ul h4').hide();
  //   });
  // });

  // $(".mega-setting").click(function(){
  //   $(".mega-menu ul, .mega-menu ul h4, .mega-setting").removeClass("d-block");
  //   $("#signup").removeClass("d-none");
  //   $("#img-head").removeClass("d-none");
  //   $("#temp-head").removeClass("d-none");
  //   $("#head-con").removeClass("d-none");
  //   $(".menu-click").removeClass("d-none");
  //   $(".mega-menu ul li").addClass("d-none");
  //   $(".menu-click").removeClass("d-none");
  //   $(".mega-setting").removeClass("d-block");
  //   $(this).addClass("d-none");

  // });
  // $(".setmenu li").click(function(){
  //   $(this).siblings('.mega-list').toggle();
  //   $(this).siblings().not('.mega-list').toggle('d-none');
  // });

//   $('.mega-menu ul h4').click(function(){
//     $(this).toggleClass('open active');
//     $(this).find('.plusminus').toggle('d-block d-none');
//     $(this).siblings("li:not(.plusminus)").slideToggle('slow').removeClass("d-none");
//     $(".badge-set span").not(":first").css("top", "8px");
// });

   

});
// ******************panel-setting*****************
$(document).ready(function(){
  $("#panel").accordion({
      collapsible:true,
      event:"click",
      animate:1000,
      active:0,
      heightStyle:true,
      icons:{header:"ui-icon-circle-plus",activeHeader:"ui-icon-circle-minus"},
  });
  $("#panel2").accordion({
      collapsible:true,
      event:"click",
      animate:1000,
      active:0,
      heightStyle:true,
      icons:{header:"ui-icon-circle-plus",activeHeader:"ui-icon-circle-minus"},
  });
  $("#panel3").accordion({
      collapsible:true,
      event:"click",
      animate:1000,
      active:0,
      heightStyle:true,
      icons:{header:"ui-icon-circle-plus",activeHeader:"ui-icon-circle-minus"},
  });
  $("#panel4").accordion({
      collapsible:true,
      event:"click",
      animate:1000,
      active:0,
      heightStyle:true,
      icons:{header:"ui-icon-circle-plus",activeHeader:"ui-icon-circle-minus"},
  });
  $("#panel5").accordion({
      collapsible:true,
      event:"click",
      animate:1000,
      active:0,
      heightStyle:true,
      icons:{header:"ui-icon-circle-plus",activeHeader:"ui-icon-circle-minus"},
  });
  $("#panel6").accordion({
      collapsible:true,
      event:"click",
      animate:1000,
      active:0,
      heightStyle:true,
      icons:{header:"ui-icon-circle-plus",activeHeader:"ui-icon-circle-minus"},
  });
  $("#panel7").accordion({
      collapsible:true,
      event:"click",
      animate:1000,
      active:0,
      heightStyle:true,
      icons:{header:"ui-icon-circle-plus",activeHeader:"ui-icon-circle-minus"},
  });
  $("#panel8").accordion({
      collapsible:true,
      event:"click",
      animate:1000,
      active:0,
      heightStyle:true,
      icons:{header:"ui-icon-circle-plus",activeHeader:"ui-icon-circle-minus"},
  });
});
    

// ************header-scroll***************
$(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('.top-header-section').addClass("scroll");
    }
    else{
      $('.top-header-section').removeClass("scroll");
    }
  });

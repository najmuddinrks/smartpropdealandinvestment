
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
$('.main__div h4').click(function(e){
  e.preventDefault();
  $(this).find('.upaero, .downaero').toggle();
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


$('.accordion-header2').click(function () {
  var accordionItem = $(this).closest('.accordion-item2');
  accordionItem.toggleClass('active');
  accordionItem.siblings().removeClass('active');

  var accordionContent = accordionItem.find('.accordion-content2');
  accordionContent.slideToggle();
  accordionContent.siblings('.accordion-content2').slideUp();
});


$(".minmax__setting").click(function(){
  $(".box2").toggle();
  
  // Change text for the first <li> based on which button was clicked
  if ($(this).attr('id') === 'min__box') {
    $(".box2 li:first").text('Min');
    $(".box2").css('margin', '0 auto');
  } else if ($(this).attr('id') === 'max__box') {
    $(".box2 li:first").text('Max');
    $(".box2").css('margin-left', '110px');
  }
});

  // Toggle visibility when #inputBox__field is clicked
  $("#inputBox__field").click(function() {
    // $('body').addClass("d-none");
    $(".resp__filter").removeClass("d-none");
  });

  // Hide .resp__filter and show body when left arrow is clicked
  $(".resp__filter .left-arrow").click(function() {
    $(".resp__filter").addClass("d-none");
    // $('body').removeClass("d-none");
  });


// $("#min__box").click(function(){
//   $(".box2").show();
//   $("#max__box + ul").hide();
// });

// $("#max__box").click(function(){
//   $(".box2").show();
//   $("#min__box + ul").hide();
// });
// $("#min__box, #max__box").click(function(){
//   $(".box2").toggle();
// });
// $('.listing li').click(function(){
  // Reset background color for all sibling li elements
  // $(this).siblings('li').css('background-color', '');

  // Set background color for the clicked li element
  // $(this).css('background-color', 'blue');
// });

// $(document).on('click', '.allision', function () {
//   $('.recent__search').append('<button class="conclusion">Delhi</button>');
// });

// $(document).on('click', '.conclusion', function () {
//   $(this).remove();
// });


$(function() {
  var dataSource = [
      {id: 1, firstName: 'Mumbai', lastName: 'Buy'},
      {id: 2, firstName: 'Andheri', lastName: 'Lokhandwala'},
      {id: 3, firstName: 'Jogeshwari', lastName: 'Buy'},
      {id: 4, firstName: 'Sion', lastName: 'Circle'},
      {id: 5, firstName: 'Kurla', lastName: 'Buy'},
      {id: 6, firstName: 'Matunga', lastName: 'Buy'},
      {id: 7, firstName: 'Goregaon', lastName: 'Buy'},
      {id: 8, firstName: 'Pune', lastName: 'Buy'},
      {id: 9, firstName: 'Thane', lastName: 'Buy'},
      {id: 10,firstName: 'Virar', lastName: 'Buy'},
      {id: 11,firstName: 'Panvel', lastName: 'Buy'},
      {id: 12,firstName: 'Vasai', lastName: 'Buy'},
      {id: 13,firstName: 'Dadar', lastName: 'Buy'},
      {id: 14,firstName: 'Santacruz', lastName: 'Buy'},
      {id: 15,firstName: 'Vile parle', lastName: 'Buy'},
      {id: 16,firstName: 'Matheran', lastName: 'Buy'},
      {id: 17,firstName: 'Mahim', lastName: 'Buy'},
      {id: 18,firstName: 'Bandra', lastName: 'Buy'},
      {id: 19,firstName: 'Khar', lastName: 'Buy'},
      {id: 20,firstName: 'Kalyan', lastName: 'Buy'},
      {id: 21,firstName: 'Parel', lastName: 'Buy'},
      {id: 22,firstName: 'Byculla', lastName: 'Buy'},
  ];
  $('#basic').magicsearch({
      dataSource: dataSource,
      fields: ['firstName', 'lastName'],
      id: 'id',
      format: '%firstName% · %lastName%',
      multiple: true,
      multiField: 'firstName',
      multiStyle: {
          space: 5,
          width: 80
      }
  });
  $('#set-btn').click(function() {
      $('#basic').trigger('set', { id: '3,4' });
  });
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
  $("#panel9").accordion({
    collapsible:true,
    event:"click",
    animate:1000,
    active:0,
    heightStyle:true,
    icons:{header:" ui-icon-caret-1-n",activeHeader:"ui-icon-caret-1-s"},
});
   $("#panel10").accordion({
  collapsible:true,
  event:"click",
  animate:1000,
  active:0,
  heightStyle:true,
  icons:{header:" ui-icon-caret-1-n",activeHeader:"ui-icon-caret-1-s"},
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

// ************openNewPage***************
  function openNewPage() {
    window.location.href = 'Assets/resp__input__search_filter/newpopup.html';
  }

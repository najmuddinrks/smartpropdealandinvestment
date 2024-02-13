
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
});

// Trigger sub menu
$('.mega__link').click(function(e) {
  e.preventDefault();
  $(this).siblings().addClass('is-active');
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
  });

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

//  const toggleDropdown = document.querySelector(".hasDropdown");
// const dropdownMenu = document.querySelector(".dropBox");
// const toggleArrow = document.querySelector(".font-setting");

// toggleDropdown.addEventListener("click",function(){
//     // alert("welcome")
//     // console.log("hello");
//     toggleDropdown.style.cssText = ~display:CSSLayerBlockRule;~
//     toggleArrow.style.transform = "rotate(180deg)";
// });


// const toggleDropdowns = function () {
//     dropdownMenu.classList.toggle("show");
//     toggleArrow.classList.toggle("arrow");
// };

// const dropdownBtn = document.getElementById("toggleDropdown");
// const dropdownMenu = document.getElementById("dropdown2");
// const toggleArrow = document.getElementById("arrow");

// const toggleDropdown = function () {
//     dropdownMenu.classList.toggle("show");
//     toggleArrow.classList.toggle("arrow");
//   };
// $(document).ready(function(){
// $("#toggleDropdown").click(function(){
//     $(".dropBox").toggle();
//     $(".font-setting").toggleClass("active");
// });
// });

// $(document).ready(function () {
//     let hoverTimeout;
//     $("#toggleDropdown").hover(
//       function () {
//         clearTimeout(hoverTimeout); // Clear any previous timeout
//         $(".dropBox").toggle();
//         $(".font-setting").toggleClass("active");
//       },
//       function () {
        // This function is executed when the mouse leaves the element.
        // You can add any additional behavior you want here.
        // hoverTimeout = setTimeout(function() {
        //   $(".dropBox").toggle();
        //   $(".font-setting").toggleClass("active");
        // }, 3000); // Delay the execution for 500 milliseconds (adjust as needed)
    //   }
    // );
  // });







// document.documentElement.addEventListener("click", function () {
//     if (dropdownMenu.classList.contains("show")) {
//       toggleDropdown();
//     }
//   });
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   dropdownBtn.addEventListener("click", function (e) {
//     e.stopPropagation();
//     toggleDropdown();
//   });
        // if (haspopup && dropSet) {
        //     haspopup.addEventListener("click", () => {
        //         if (dropSet.style.display === 'none' || dropSet.style.display === '') {
        //             dropSet.style.display = 'block';
        //         } else {
        //             dropSet.style.display = 'none';
        //         }
        //     });
        // } else {
        //     console.error("Either #box-dropdown or .drop-box not found.");
        // }

        // $(document).ready(function(){
        //   $(".mega-list").click(function(){
        //     $("li").addClass("d-block");
        //   });
        //   $(".mega-list h4").click(function(){
        //     $(".mega-list h4").slideToggle();
        //     $(".mega-list li span").toggleClass("fa-minus-circle fa-plus-circle")
        //     $(this).next("li").addClass("active").slideUp();
        //     $(this).children("span").toggleClass("fa-plus-circle fa-minus-circle")
        //   });
        // });

        // $('.menu-click').on('click', function() {
        //   $(this).find('.fa-angle-right').toggleClass('d-none d-block');
        //   $(this).find('.fa-arrow-left').toggleClass('d-block d-none');
        // });

        // $('.plus-adjust, .minus-adjust').on('click', function(){
        //   $(this).siblings('span').toggle();
        // });

        // $("#setMenuList li").click(function(){
        //   $(this).siblings('li').toggle();
        // });

 

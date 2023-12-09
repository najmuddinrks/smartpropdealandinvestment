$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        // variableWidth:200,
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover:true,
     
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
                breakpoint: 800,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                }
              },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
    });
    $('.slider2').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        // variableWidth:100,
        prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
        // autoplay: true,
        // autoplaySpeed: 2000,
        // pauseOnHover:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // centerMode: true,
                    // centerPadding: '20px',
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: true
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

});


let Buttons = document.querySelectorAll(".selectSection button");

for (let button of Buttons) {
  button.addEventListener('click', (e) => {
    const et = e.target;
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    et.classList.add("active");
    
    let allContent = document.querySelectorAll('.content');

    for (let content of allContent) {
      if(content.getAttribute('data-number') === button.getAttribute('data-number')) {
        content.style.display = "block";
       } else {
        content.style.display = "none";
       }
     }
  });
}

// ****************another-section**************************
let Buttons2 = document.querySelectorAll(".selectSection2 button");

for (let button of Buttons2) {
  button.addEventListener('click', (e) => {
    const et = e.target;
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    et.classList.add("active");
    
    let allContent = document.querySelectorAll('.content1');

    for (let content1 of allContent) {
      if(content1.getAttribute('data-number') === button.getAttribute('data-number')) {
        content1.style.display = "block";
       } else {
        content1.style.display = "none";
       }
     }
  });
}
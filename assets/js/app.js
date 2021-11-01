$(".live-task-cards").slick({
  dots: true,
  speed: 700,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  customPaging: function (slider, i) {
    return '<a href="#" class="slick-slider-dots"></a>';
  },

  responsive: [
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1.5,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1.2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 420,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".our-services-cards").slick({
  dots: false,
  infinite: false,
  speed: 700,
  arrows: true,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  nextArrow: `<button class="slide-arrow next-arrow"></button>`,

  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// $(".customers-right").slick({
//   dots: false,
//   infinite: false,
//   speed: 700,
//   arrows: true,
//   slidesToShow: 2,
//   slidesToScroll: 1,
//   nextArrow: ` <button class="customers-card-btn">
//   <img  src="./assets/images/chevron-right.png" alt="" />
// </button>`,
//   prevArrow: ` <button class="customers-card-btn">
//   <img  src="./assets/images/chevron-left.png" alt="" />
// </button>`,
// });

// for accordions ===================================

const toHelpAccordionBtn = document.querySelectorAll(".to-help-accordion-btn");
const footerFaqBtn = document.querySelectorAll(".footer-faq-btn");

let accordionFunction = (btn, body, showDash) => {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      let parent = btn[i].parentElement;
      let accordionBody = parent.querySelector(body);

      if (accordionBody.clientHeight == 0) {
        accordionBody.style.height = accordionBody.scrollHeight + "px";
        parent.classList.add("accordion-open");
      } else {
        accordionBody.style.height = 0;
        parent.classList.remove("accordion-open");
      }
    });
  }
};

accordionFunction(toHelpAccordionBtn, ".to-help-accordion-body", true);
accordionFunction(footerFaqBtn, ".footer-faq-body", false);

// for sidebar in responsive ================================
const navbarItems = document.querySelector(".navbar-items");
const hamburger = document.querySelector(".hamburger");
const navbarCrossIcon = document.querySelector(".navbar-cross-icon");
const blackScreen = document.querySelector(".black-screen");

hamburger.addEventListener("click", () => {
  navbarItems.classList.toggle("show");
  blackScreen.classList.toggle("show");
});
navbarCrossIcon.addEventListener("click", () => {
  navbarItems.classList.remove("show");
  blackScreen.classList.remove("show");
});
blackScreen.addEventListener("click", () => {
  navbarItems.classList.remove("show");
  blackScreen.classList.remove("show");
});

// swiper
var swiper = new Swiper(".customers-right", {
  slidesPerView: 1,
  spaceBetween: 0,

  navigation: {
    nextEl: ".swiper-prev",
    prevEl: ".swiper-next",
  },

  breakpoints: {
    780: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
});

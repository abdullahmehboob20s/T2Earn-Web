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

const toHelpAccordion = document.querySelectorAll(".to-help-accordion");
const toHelpAccordionBtn = document.querySelectorAll(".to-help-accordion-btn");

for (let i = 0; i < toHelpAccordionBtn.length; i++) {
  toHelpAccordionBtn[i].addEventListener("click", () => {
    let accordionBody = toHelpAccordionBtn[i].parentElement.querySelector(
      ".to-help-accordion-body"
    );
    let accordionIcon = toHelpAccordionBtn[i].parentElement.querySelector(
      ".to-help-accordion-icon"
    );

    if (accordionBody.clientHeight == 0) {
      accordionBody.style.height = accordionBody.scrollHeight + "px";
      accordionIcon.src = "./assets/images/dash-icon.png";
    } else {
      accordionIcon.src = "./assets/images/plus-icon.png";
      accordionBody.style.height = 0;
    }
  });
}

// for sidebar in responsive
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

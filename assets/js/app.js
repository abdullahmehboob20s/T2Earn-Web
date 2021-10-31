$(".live-task-cards").slick({
  dots: true,
  infinite: true,
  speed: 700,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  customPaging: function (slider, i) {
    return '<a href="#" class="slick-slider-dots"></a>';
  },
});

$(".our-services-cards").slick({
  dots: false,
  infinite: false,
  speed: 700,
  arrows: true,
  slidesToShow: 3.5,
  slidesToScroll: 1,
  nextArrow: `<button class="slide-arrow next-arrow"></button>`,
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

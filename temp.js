var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          550: {
            slidesPerView: 3,
          }
        }
});



var swiper = new Swiper(".mySwiper1", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
});



var swiper = new Swiper(".mySwiper2", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: ".swiper-pagination",
        },
});

var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          550: {
            slidesPerView: 1,
          }
        }
});



  function opentab(evt, name) {
    var i, content, links;

    content = document.getElementsByClassName("dp1");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    // console.log("sketchdetails");

    links = document.getElementsByClassName("ap1");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("default").click();



const showOnPx = 100;
const backToTopButton = document.querySelector(".scrollUp");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});




$(document).ready(function() {

  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
      if (localStart < value) {
        localStart++;
        counters[id].innerHTML = localStart;
      }
    }, );
  }

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
document.getElementById("default");
});

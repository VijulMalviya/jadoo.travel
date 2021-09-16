AOS.init();

$(window).on('load' ,function(){
  $(".loader").fadeOut("2000");
  
})

$(document).ready(function () {
  $("#bars").click(function () {
    $(".nav-links").slideToggle("slow");
  });
  $(".servicecard").hover(function () {
    $(".servicecard").removeClass("activeservice");
    $(".img").css("display", "none");
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".navigation").style.backgroundColor = "white";
    document.querySelector(".navigation").classList.add("shadow");
  } else {
    document.querySelector(".navigation").style.backgroundColor = "transparent";
    document.querySelector(".navigation").classList.remove("shadow");
  }
}

var swiper = new Swiper(".mySwiper", {
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

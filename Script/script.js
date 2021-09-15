AOS.init();

$(document).ready(function() {
    $("#bars").click(function(){
        $(".nav-links").slideToggle("slow");
      });
      $(".servicecard").hover(function(){
        $(".servicecard").removeClass('activeservice');
        $(".img").css('display','none');

      });
});

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".navigation").style.backgroundColor = "white";
        document.querySelector(".navigation").classList.add("shadow");
      } else {
        document.querySelector(".navigation").style.backgroundColor = "transparent";
        document.querySelector(".navigation").classList.remove("shadow");
      }
    }
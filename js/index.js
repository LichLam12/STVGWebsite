/*$(document).ready(function() {
  window.onscroll = function() {
    myFunction();
  };
  animation_load();
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
});*/
$(document).ready(function() {
  /* Every time the window is scrolled ... */
  animation_load();
  $(window).scroll(function() {
    /* Check the location of each desired element */
    animation_load();
  });
  var myCustomScrollbar = document.querySelector(".my-custom-scrollbar");
  var ps = new PerfectScrollbar(myCustomScrollbar);

  var scrollbarY = myCustomScrollbar.querySelector(
    ".ps.ps--active-y>.ps__scrollbar-y-rail"
  );

  myCustomScrollbar.onscroll = function() {
    scrollbarY.style.cssText = `top: ${
      this.scrollTop
    }px!important; height: 400px; right: ${-this.scrollLeft}px`;
  };
});
function animation_load() {
  $(".main-section").each(function(i) {
    var top_of_object_services = $(".fadeServices").offset().top;
    var top_of_object_products = $(".flex-class").offset().top;
    var top_of_object_contact = $("#contact").offset().top;
  
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    console.log(top_of_object_services + " + " + bottom_of_window);
    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window >= top_of_object_services) {
      $("#services").animate({ opacity: "1" });
      $(".fadeServices").addClass("fadeInLeft");
      $(".fadeInUpImg").addClass("fadeInUp");
    }
    if (bottom_of_window >= top_of_object_contact) {
      $("#contact").animate({ opacity: "1" });
      $(".contact-left").addClass("fadeInLeft");
      $(".contact-right").addClass("fadeInUp");
    }

    if (bottom_of_window >= top_of_object_products) {
      $("#products").animate({ opacity: "1" });
      $(".flex-class").animate({ opacity: "1" });
      $(".flex-class").addClass("fadeInUp");
    }

    if (bottom_of_window >= top_of_object_products) {
      $("#products").animate({ opacity: "1" });
      $(".flex-class").animate({ opacity: "1" });
      $(".flex-class").addClass("fadeInUp");
    }
  });
}

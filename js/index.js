$(document).ready(function() {
    //var navbar = document.getElementById("navbar");
    //var sticky = navbar.offsetTop;
    
  /* Every time the window is scrolled ... */
  $(window).scroll(function() {
    /* Check the location of each desired element */
    $(".main-section").each(function(i) {
      var bottom_of_object = $(".fadeServices").offset().top;
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      console.log(bottom_of_object + "SS" + bottom_of_window);
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window >= bottom_of_object) {
        $(".main-section").animate({'opacity':'1'});
        $(".fadeServices").addClass("fadeInLeft");
        $(".fadeInUpImg").addClass("fadeInUp");
      }
    });
  });
    
     window.onscroll = function() {myFunction()};

    var navbar = $("#navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
});

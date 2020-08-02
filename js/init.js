(function ($) {
  $(function () {

    $('.sidenav').sidenav({
      edge: "right"
    });
    $('.parallax').parallax();
    $('.carousel').carousel({
      duration: 500
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space

(function ($) {
  $(function () {

    $('.sidenav').sidenav({
      edge: "right",
      closeOnClick: true
    });
    $('.parallax').parallax();
    $('.carousel').carousel({
      duration: 500
    });
    $('.modal').modal();


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Prevents link from firing without confirmation

  }); // end of document ready
})(jQuery); // end of jQuery name space

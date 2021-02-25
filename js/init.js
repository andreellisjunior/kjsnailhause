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

// Detects if device is on iOS 
const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase();
  return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if should display install popup notification:
if (isIos() && !isInStandaloneMode()) {
  const iosPopup = document.querySelector('#ios-popup');

  iosPopup.style.display = "flex";
}
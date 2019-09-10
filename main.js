// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Random Price Generator
let prices = [...$(".card-footer h3")];

$.each([...prices], (i, price) => {
  $(price).text(`$${(Math.floor(Math.random() * 40 + 10))}`);
});

// Navbar scroll background

$(window).scroll(() => {
  const nav = $("#main-nav");
  const mediumScreenSize = 768;

  if ($(window).scrollTop() > 0 && $(window).width() > mediumScreenSize) {
    nav.removeClass("navbar-dark bg-transparent");
    nav.addClass("navbar-light bg-white");
  } else {
    nav.removeClass("navbar-light bg-white");
    nav.addClass("navbar-dark bg-transparent");
  }
});

// Lightbox init

$(document).on('click', '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
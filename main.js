// Get the current year for the copyright
$('#year').text(new Date().getFullYear());


// Random Price Generator
let prices = [...$(".card-footer h3")];

$.each([...prices], (i, price) => {
  $(price).text(`$${(Math.floor(Math.random() * 40 + 10))}`);
});


// Navbar scroll background change
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


// Scrollspy init
const navbarHeight = $("#main-nav").prop("clientHeight");

$('body').scrollspy({ target: '#main-nav', offset: navbarHeight });


// Smooth Scrolling
$("#main-nav a, #home a").on('click', function (e) {
  if (this.hash !== "") {
    e.preventDefault();

    const hash = this.hash;

    $('html,body').animate({
      scrollTop: $(hash).offset().top - (navbarHeight - 1)
    }, 1200, function () {

      window.location.hash = hash - (navbarHeight - 1);
    });

  }
});



// Restaurant Menu

function dropdownClassRemove() {
  $(".dropdown-item").removeClass("active");
}

// Menu section tab navigation
$("#menuTab a").on("click", function () {
  if (this.text !== $(".dropdown-item.active").text()) {
    dropdownClassRemove();
    if (this.text === "Breakfast") {
      $(".dropdown-item:nth-of-type(1)").addClass("active");
    } else if (this.text === "Lunch") {
      $(".dropdown-item:nth-of-type(2)").addClass("active");
    } else if (this.text === "Dinner") {
      $(".dropdown-item:nth-of-type(3)").addClass("active");
    } else if (this.text === "Mains") {
      $(".dropdown-item:nth-of-type(4)").addClass("active");
    }
  }
})

// Dropdown List - navbar
$(".dropdown-item").on("click", function () {

  const tab = this.text;

  dropdownClassRemove();
  $("#menuTabContent .tab-pane").removeClass("show active");
  $("#menuTab .nav-link").removeClass("active");
  $(this).addClass("active");


  if (tab === "Breakfast") {
    $("#breakfast-tab").addClass("active");
    $("#menuTabContent #breakfast").addClass("active show");
  } else if (tab === "Lunch") {
    $("#lunch-tab").addClass("active");
    $("#menuTabContent #lunch").addClass("active show");
  } else if (tab === "Dinner") {
    $("#dinner-tab").addClass("active");
    $("#menuTabContent #dinner").addClass("active show");
  } else if (tab === "Mains") {
    $("#mains-tab").addClass("active");
    $("#menuTabContent #mains").addClass("active show");
  }

});


// Highlight active tab in navbar when scrolling
$(window).on('activate.bs.scrollspy', function (e, obj) {

  const section = obj.relatedTarget;

  if (section === "#menu") {
    dropdownClassRemove();

    if (($("#menuTabContent #breakfast").hasClass("show"))) {
      $(".dropdown-item:nth-of-type(1)").addClass("active");
    } else if (($("#menuTabContent #lunch").hasClass("show"))) {
      $(".dropdown-item:nth-of-type(2)").addClass("active");
    } else if (($("#menuTabContent #dinner").hasClass("show"))) {
      $(".dropdown-item:nth-of-type(3)").addClass("active");
    } else if (($("#menuTabContent #mains").hasClass("show"))) {
      $(".dropdown-item:nth-of-type(4)").addClass("active");
    }
  }

});

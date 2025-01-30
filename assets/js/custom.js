$(document).ready(function() {
  var header = $(".site-header");

  $(window).on("scroll", function() {
      var scroll = $(this).scrollTop();
      if (scroll >= 50) {
          header.addClass("fixed");
      } else {
          header.removeClass("fixed");
      }
  });
});


// Navbar menu

const navbar = document.querySelector(".site-header");
const humburger = document.querySelector(".toggle");
const close = document.querySelector(".close");

humburger.addEventListener("click", function() {
  navbar.classList.add("menuToggle");
});
close.addEventListener("click", function() {
  navbar.classList.remove("menuToggle");
});

AOS.init({
  duration: 1200,
})


document.addEventListener("DOMContentLoaded", function() {
  var modal = document.querySelector(".modal");
  var triggers = document.querySelectorAll(".trigger");
  var closeButton = document.querySelector(".close-button");

  function toggleModal() {
      modal.classList.toggle("show-modal");
  }

  function windowOnClick(event) {
      if (event.target === modal) {
          toggleModal();
      }
  }

  for (var i = 0, len = triggers.length; i < len; i++) {
      triggers[i].addEventListener("click", toggleModal);
  }

  if (closeButton) {
      closeButton.addEventListener("click", toggleModal);
  } else {
      console.error("closeButton not found in the DOM");
  }

  window.addEventListener("click", windowOnClick);
});
var closeButton = document.querySelector(".modal .close-button");
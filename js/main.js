$(document).ready(function () {
  $(window).scroll(function () {
    let windowScroll = $(window).scrollTop();
    let sectionOffset1 = $("#about").offset().top;
    if (windowScroll > sectionOffset1 - 100) {
      $("nav").css("backgroundColor", "black");
      $("#scrollBtn").fadeIn(500);
    } else {
      $("nav").css("backgroundColor", "rgba(0, 0, 0, 0.6)");
      $("#scrollBtn").fadeOut(500);
    }
  });
  $("a[href^='#']").click(function (e) {
    e.preventDefault();
    let aHref = $(this).attr("href");
    let sectionOffset2 = $(aHref).offset().top;
    $(".nav-item .nav-link").removeClass("active");
    $(this).addClass("active");
    $("html,body").animate({ scrollTop: sectionOffset2 }, 1000);
  });
  $(".spinner").fadeOut(
    (1000,
    function () {
      $("#loading").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
        $("#loading").remove();
      });
    })
  );
});
let typed = new Typed("#element", {
  strings: ["Designer", "Developer", "Freelancer", "Photographer"],
  smartBackspace: false,
  loop: true,
  backSpeed: 100,
  typeSpeed: 100,
  backDelay: 2000,
});

let toggleBtn = document.querySelector(".navbar-toggler");
let toggleLinks = document.querySelector(".navbar .navbar-collapse");
let toggleLink = document.querySelector(".navbar .navbar-nav a");

toggleLink.addEventListener("click", function (e) {
  if (toggleLinks.classList.contains("show")) {
    toggleLinks.classList.remove("show");
  }
});
document.addEventListener("click", function (e) {
    if (toggleLinks.classList.contains("show")) {
      toggleLinks.classList.remove("show");
    }
});
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", function () {
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.id;
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === currentSection) {
        link.classList.add("active");
      }
    });
  });
});
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

  let typed = new Typed("#element", {
    strings: ["Designer", "Developer", "Freelancer", "Photographer"],
    smartBackspace: false,
    loop: true,
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 2000,
  });
});

$("#Hamburger").click(function () {
  $(".sidebar").animate(
    {
      left: 0,
    },
    500
  );
 // $("html").css("overflow", "hidden");
});

$("#Close").click(function () {
  $(".sidebar").animate(
    {
      left: "-100rem",
    },
    500
  );
  //$("html").css("overflow", "auto");
});

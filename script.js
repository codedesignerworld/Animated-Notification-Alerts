$(".nav li").click(function () {
  $(this).addClass("is-active").siblings().removeClass("is-active");
});

$(".grid .item").click(function () {
  $(".website .alert-element").toggleClass("is-active");
});
$(".section-modal.profile").click(function () {
  $(".overlay").addClass("is-active");
});

let btn = 0;

$(".nav__btn").click(function () {
  if (btn == 0) {
    $(".nav__detail").slideDown();
    btn = 1;
  } else if (btn == 1) {
    $(".nav__detail").slideUp();
    btn = 0;
  }
});

$(function () {
  $(".nav__detail > a").click(function (event) {
    event.preventDefalut();
    $("html, body").animate({ scrollTop: $(this.hash).offset.top }, 600);
  });
});


$(".main__nav > span").click(function (event) {
  if (event.target.innerText == "가족") {
    for (let i = 1; i <= 4; i++) {
      if (i == 1) {
        $(`#message${i}`).css({
          display: "block",
        });
        $(`.main__nav > span:nth-child(${i})`).css({
          textDecoration: "underline",
        });
      } else if (i != 1) {
        $(`#message${i}`).css({ display: "none" });
        $(`.main__nav > span:nth-child(${i})`).css({ textDecoration: "none" });
      }
    }
  } else if (event.target.innerText == "지인") {
    for (let i = 1; i <= 4; i++) {
      if (i == 2) {
        $(`#message${i}`).css({ display: "block" });
        $(`.main__nav > span:nth-child(${i})`).css({
          textDecoration: "underline",
        });
      } else if (i != 2) {
        $(`#message${i}`).css({ display: "none" });
        $(`.main__nav > span:nth-child(${i})`).css({ textDecoration: "none" });
      }
    }
  } else if (event.target.innerText == "아들 친구들") {
    for (let i = 1; i <= 4; i++) {
      if (i == 3) {
        $(`#message${i}`).css({ display: "block" });
        $(`.main__nav > span:nth-child(${i})`).css({
          textDecoration: "underline",
        });
      } else if (i != 3) {
        $(`#message${i}`).css({ display: "none" });
        $(`.main__nav > span:nth-child(${i})`).css({ textDecoration: "none" });
      }
    }
  } else if (event.target.innerText == "예비 며느리") {
    for (let i = 1; i <= 4; i++) {
      if (i == 4) {
        $(`#message${i}`).css({ display: "block" });
        $(`.main__nav > span:nth-child(${i})`).css({
          textDecoration: "underline",
        });
      } else if (i != 4) {
        $(`#message${i}`).css({ display: "none" });
        $(`.main__nav > span:nth-child(${i})`).css({ textDecoration: "none" });
      }
    }
  }
});

$("header").slideDown("slow");
$("header").css({ display: "flex" });
$(".img__container").fadeIn("slow");

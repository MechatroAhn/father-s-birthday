let banner_now = 0;
let no1 = 0;
let no2 = 0;
let no3 = 0;
let no4 = 0;
let no5 = 0;

bannerChange();

function bannerChange() {
  banner_now++;

  if (banner_now > 5) {
    banner_now = 1;
  }

  if (banner_now == 1) {
    $(".banner").css({
      backgroundImage:
        "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbccp9uMUcWNRBxQrEdBZMM5iWLrq6Y2Gllw&usqp=CAU)",
    });
    $(".banner__btns > div:nth-child(1)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
      borderBottom: "2px solid orange",
    });
    $(".banner__btns > div:nth-child(2)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(3)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(4)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(5)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    if (no1 != 1) {
      $(".banner__btns > div:nth-child(1) > .banner__btns__gauge").addClass(
        "move"
      );
    }
    setTimeout(function () {
      $(".banner__btns > div:nth-child(1) > .banner__btns__gauge").removeClass(
        "move"
      );
    }, 5000);
  } else if (banner_now == 2) {
    $(".banner").css({
      backgroundImage:
        "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtaLA5c7YXSN_bVrwoBIaprr6KWqIRQfNZ-g&usqp=CAU)",
    });
    $(".banner__btns > div:nth-child(2)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
      borderBottom: "2px solid orange",
    });
    $(".banner__btns > div:nth-child(1)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(3)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(4)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(5)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    if (no2 != 1) {
      $(".banner__btns > div:nth-child(2) > .banner__btns__gauge").addClass(
        "move"
      );
    }
    setTimeout(function () {
      $(".banner__btns > div:nth-child(2) > .banner__btns__gauge").removeClass(
        "move"
      );
    }, 5000);
  } else if (banner_now == 3) {
    $(".banner").css({
      backgroundImage:
        "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr4iEfHoW0qOVxWoLH_AZ60x6rn88SNtuX3A&usqp=CAU)",
    });
    $(".banner__btns > div:nth-child(3)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
      borderBottom: "2px solid orange",
    });
    $(".banner__btns > div:nth-child(2)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(1)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(4)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(5)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    if (no3 != 1) {
      $(".banner__btns > div:nth-child(3) > .banner__btns__gauge").addClass(
        "move"
      );
    }

    setTimeout(function () {
      $(".banner__btns > div:nth-child(3) > .banner__btns__gauge").removeClass(
        "move"
      );
    }, 5000);
  }
  if (banner_now == 4) {
    $(".banner").css({
      backgroundImage:
        "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCLcyxuEtqHNpjx6U1DeOk7hzjeaTxJWvTEg&usqp=CAU)",
    });
    $(".banner__btns > div:nth-child(4)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
      borderBottom: "2px solid orange",
    });
    $(".banner__btns > div:nth-child(2)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(3)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(1)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(5)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    if (no4 != 1) {
      $(".banner__btns > div:nth-child(4) > .banner__btns__gauge").addClass(
        "move"
      );
    }
    setTimeout(function () {
      $(".banner__btns > div:nth-child(4) > .banner__btns__gauge").removeClass(
        "move"
      );
    }, 5000);
  }
  if (banner_now == 5) {
    $(".banner").css({
      backgroundImage:
        "url(data:image/jpeg;base64,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)",
    });
    $(".banner__btns > div:nth-child(5)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
      borderBottom: "2px solid orange",
    });
    $(".banner__btns > div:nth-child(2)").css({
      backgroundColor: "rgba(0,0,0,0.4)",
      borderBottom: "none",
    });
    $(".banner__btns > div:nth-child(3)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(4)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    $(".banner__btns > div:nth-child(1)").css({
      borderBottom: "none",
      backgroundColor: "rgba(0,0,0,0.4)",
    });
    if (no5 != 1) {
      $(".banner__btns > div:nth-child(5) > .banner__btns__gauge").addClass(
        "move"
      );
    }
    setTimeout(function () {
      $(".banner__btns > div:nth-child(5) > .banner__btns__gauge").removeClass(
        "move"
      );
    }, 5000);
  }
}

$(".banner__btns > div:nth-child(1)").click(function () {
  banner_now = 0;
  clearTimeout(test);
  $(".banner__btns > div:nth-child(2) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(3) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(4) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(5) > .banner__btns__gauge").removeClass(
    "move"
  );
  no1 = 1;
  bannerChange();
});
$(".banner__btns > div:nth-child(2)").click(function () {
  banner_now = 1;
  clearTimeout(test);
  $(".banner__btns > div:nth-child(1) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(3) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(4) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(5) > .banner__btns__gauge").removeClass(
    "move"
  );
  no2 = 1;
  bannerChange();
});
$(".banner__btns > div:nth-child(3)").click(function () {
  banner_now = 2;
  clearTimeout(test);
  $(".banner__btns > div:nth-child(1) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(2) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(4) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(5) > .banner__btns__gauge").removeClass(
    "move"
  );
  no3 = 1;
  bannerChange();
});
$(".banner__btns > div:nth-child(4)").click(function () {
  banner_now = 3;
  clearTimeout(test);
  $(".banner__btns > div:nth-child(2) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(3) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(1) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(5) > .banner__btns__gauge").removeClass(
    "move"
  );
  no4 = 1;
  bannerChange();
});
$(".banner__btns > div:nth-child(5)").click(function () {
  banner_now = 4;
  clearTimeout(test);
  $(".banner__btns > div:nth-child(2) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(3) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(4) > .banner__btns__gauge").removeClass(
    "move"
  );
  $(".banner__btns > div:nth-child(1) > .banner__btns__gauge").removeClass(
    "move"
  );
  no5 = 1;
  bannerChange();
});

$(".banner__btnItem:nth-child(1)").mouseover(function () {
  if (banner_now != 1) {
    $(".banner__btnItem:nth-child(1)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
    });
  }
});
$(".banner__btnItem:nth-child(1)").mouseleave(function () {
  if (banner_now != 1) {
    $(".banner__btnItem:nth-child(1)").css({
      backgroundColor: "rgba(0,0,0,0.4",
    });
  }
});
$(".banner__btnItem:nth-child(2)").mouseover(function () {
  if (banner_now != 2) {
    $(".banner__btnItem:nth-child(2)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
    });
  }
});
$(".banner__btnItem:nth-child(2)").mouseleave(function () {
  if (banner_now != 2) {
    $(".banner__btnItem:nth-child(2)").css({
      backgroundColor: "rgba(0,0,0,0.4",
    });
  }
});
$(".banner__btnItem:nth-child(3)").mouseover(function () {
  if (banner_now != 3) {
    $(".banner__btnItem:nth-child(3)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
    });
  }
});
$(".banner__btnItem:nth-child(3)").mouseleave(function () {
  if (banner_now != 3) {
    $(".banner__btnItem:nth-child(3)").css({
      backgroundColor: "rgba(0,0,0,0.4",
    });
  }
});
$(".banner__btnItem:nth-child(4)").mouseover(function () {
  if (banner_now != 4) {
    $(".banner__btnItem:nth-child(4)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
    });
  }
});
$(".banner__btnItem:nth-child(4)").mouseleave(function () {
  if (banner_now != 4) {
    $(".banner__btnItem:nth-child(4)").css({
      backgroundColor: "rgba(0,0,0,0.4",
    });
  }
});
$(".banner__btnItem:nth-child(5)").mouseover(function () {
  if (banner_now != 5) {
    $(".banner__btnItem:nth-child(5)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
    });
  }
});
$(".banner__btnItem:nth-child(5)").mouseleave(function () {
  if (banner_now != 5) {
    $(".banner__btnItem:nth-child(5)").css({
      backgroundColor: "rgba(0,0,0,0.4",
    });
  }
});
const test = setInterval(bannerChange, 5000);



let footerOn = 0;

$(".footer__middle__lang").click(function () {
  if (footerOn == 0) {
    $(".footer__middle__lang__more").fadeIn();
    $(".footer__middle__lang__more").css({ display: "grid" });
    footerOn = 1;
  } else if (footerOn == 1) {
    $(".footer__middle__lang__more").fadeOut();
    footerOn = 0;
  }
});

$(".main__center__R__4__pop > i").click(function () {
  $(".main__center__R__4__pop").css({ display: "none" });
});

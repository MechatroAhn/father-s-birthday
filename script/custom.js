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
        "url(https://sgimage.netmarble.com/web/6N/2022/09/081744/merge_bn.jpg)",
    });
    $(".banner__btns > div:nth-child(1)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
      borderBottom: "2px solid orange",
    });
    $(".banner__btns > div:nth-child(1) > h2").css({ color: "white" });
    $(".banner__btns > div:nth-child(5) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(2) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(3) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(4) > h2").css({
      color: "rgb(206, 206, 206)",
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
        "url(https://sgimage.netmarble.com/web/6N/2022/11/091636/tab_pc_top_221109.png)",
    });
    $(".banner__btns > div:nth-child(2)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
      borderBottom: "2px solid orange",
    });
    $(".banner__btns > div:nth-child(2) > h2").css({ color: "white" });
    $(".banner__btns > div:nth-child(1) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(5) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(3) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(4) > h2").css({
      color: "rgb(206, 206, 206)",
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
        "url(https://sgimage.netmarble.com/web/6N/2022/11/171030/skr_branding_top.jpg)",
    });
    $(".banner__btns > div:nth-child(3)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
      borderBottom: "2px solid orange",
    });
    $(".banner__btns > div:nth-child(3) > h2").css({ color: "white" });
    $(".banner__btns > div:nth-child(1) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(2) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(5) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(4) > h2").css({
      color: "rgb(206, 206, 206)",
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
        "url(https://sgimage.netmarble.com/web/6N/2022/11/171030/a3_branding_top.jpg)",
    });
    $(".banner__btns > div:nth-child(4)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
      borderBottom: "2px solid orange",
    });
    $(".banner__btns > div:nth-child(4) > h2").css({ color: "white" });
    $(".banner__btns > div:nth-child(1) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(2) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(3) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(5) > h2").css({
      color: "rgb(206, 206, 206)",
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
        "url(https://sgimage.netmarble.com/web/6N/2022/11/171030/zempot_branding_poker_01.png)",
    });
    $(".banner__btns > div:nth-child(5)").css({
      backgroundColor: "rgba(185,185,185,0.2)",
      borderBottom: "2px solid orange",
    });
    $(".banner__btns > div:nth-child(5) > h2").css({ color: "white" });
    $(".banner__btns > div:nth-child(1) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(2) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(3) > h2").css({
      color: "rgb(206, 206, 206)",
    });
    $(".banner__btns > div:nth-child(4) > h2").css({
      color: "rgb(206, 206, 206)",
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

$(".main__L__container > .main__L__container__item:nth-child(1)").mouseover(
  function () {
    $(".main__L__container__item:nth-child(1) > .hover__container").css({
      transform: "translateY(-20px)",
      boxShadow: "0 240px 30px 20px rgba(0,0,0,0.3)",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(1)").mouseleave(
  function () {
    $(".main__L__container__item:nth-child(1) > .hover__container").css({
      transform: "translateY(0px)",
      boxShadow: "none",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(2)").mouseover(
  function () {
    $(".main__L__container__item:nth-child(2) > .hover__container").css({
      transform: "translateY(-20px)",
      boxShadow: "0 240px 30px 20px rgba(0,0,0,0.3)",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(2)").mouseleave(
  function () {
    $(".main__L__container__item:nth-child(2) > .hover__container").css({
      transform: "translateY(0px)",
      boxShadow: "none",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(3)").mouseover(
  function () {
    $(".main__L__container__item:nth-child(3) > .hover__container").css({
      transform: "translateY(-20px)",
      boxShadow: "0 240px 30px 20px rgba(0,0,0,0.3)",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(3)").mouseleave(
  function () {
    $(".main__L__container__item:nth-child(3) > .hover__container").css({
      transform: "translateY(0px)",
      boxShadow: "none",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(4)").mouseover(
  function () {
    $(".main__L__container__item:nth-child(4) > .hover__container").css({
      transform: "translateY(-20px)",
      boxShadow: "0 240px 30px 20px rgba(0,0,0,0.3)",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(4)").mouseleave(
  function () {
    $(".main__L__container__item:nth-child(4) > .hover__container").css({
      transform: "translateY(0px)",
      boxShadow: "none",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(5)").mouseover(
  function () {
    $(".main__L__container__item:nth-child(5) > .hover__container").css({
      transform: "translateY(-20px)",
      boxShadow: "0 240px 30px 20px rgba(0,0,0,0.3)",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(5)").mouseleave(
  function () {
    $(".main__L__container__item:nth-child(5) > .hover__container").css({
      transform: "translateY(0px)",
      boxShadow: "none",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(6)").mouseover(
  function () {
    $(".main__L__container__item:nth-child(6) > .hover__container").css({
      transform: "translateY(-20px)",
      boxShadow: "0 240px 30px 20px rgba(0,0,0,0.3)",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(6)").mouseleave(
  function () {
    $(".main__L__container__item:nth-child(6) > .hover__container").css({
      transform: "translateY(0px)",
      boxShadow: "none",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(7)").mouseover(
  function () {
    $(".main__L__container__item:nth-child(7) > .hover__container").css({
      transform: "translateY(-20px)",
      boxShadow: "0 240px 30px 20px rgba(0,0,0,0.3)",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(7)").mouseleave(
  function () {
    $(".main__L__container__item:nth-child(7) > .hover__container").css({
      transform: "translateY(0px)",
      boxShadow: "none",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(8)").mouseover(
  function () {
    $(".main__L__container__item:nth-child(8) > .hover__container").css({
      transform: "translateY(-20px)",
      boxShadow: "0 240px 30px 20px rgba(0,0,0,0.3)",
    });
  }
);
$(".main__L__container > .main__L__container__item:nth-child(8)").mouseleave(
  function () {
    $(".main__L__container__item:nth-child(8) > .hover__container").css({
      transform: "translateY(0px)",
      boxShadow: "none",
    });
  }
);

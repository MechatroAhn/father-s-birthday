let now_main = 1;
let save_time = "11";

$(".header__bottom > ul > li").click(function (event) {
  if (event.target.id == "li1") {
    now_main = 1;
  } else if (event.target.id == "li2") {
    now_main = 2;
  } else if (event.target.id == "li3") {
    now_main = 3;
  } else if (event.target.id == "li4") {
    now_main = 4;
  } else if (event.target.id == "li5") {
    now_main = 5;
  } else if (event.target.id == "li6") {
    now_main = 6;
  } else if (event.target.id == "li7") {
    now_main = 7;
  } else if (event.target.id == "li8") {
    now_main = 8;
  } else if (event.target.id == "li9") {
    now_main = 9;
  } else if (event.target.id == "li10") {
    now_main = 10;
  } else if (event.target.id == "li11") {
    now_main = 11;
  } else if (event.target.id == "li12") {
    now_main = 12;
  } else if (event.target.id == "li13") {
    now_main = 13;
  }
  main_click();
});

function main_click() {
  for (i = 1; i <= 13; i++) {
    if (now_main == i) {
      $(`main > div:nth-child(${i})`).css({ display: "grid" });
      $(`#li${i}`).css({ backgroundColor: "black", color: "white" });
    } else {
      $(`main > div:nth-child(${i})`).css({ display: "none" });
      $(`#li${i}`).css({ backgroundColor: "rgb(244,244,244)", color: "black" });
    }
  }
}

$(".main__item__img__container").mouseover(function (event) {
  save_time = event.target.parentElement.querySelector("span").innerText;
  event.target.parentElement.querySelector("span").innerText =
    "계속 마우스 오버하여 재생하기";
});

$(".main__item__img__container").mouseleave(function (event) {
  event.target.parentElement.querySelector("span").innerText = save_time;
});

$(".header__bottom > ul > li").mouseover(function (event) {
  if (event.target.style.backgroundColor != "black") {
    event.target.style.backgroundColor = "rgb(200,200,200)";
  }
});
$(".header__bottom > ul > li").mouseleave(function (event) {
  if (event.target.style.backgroundColor != "black") {
    event.target.style.backgroundColor = "rgb(244,244,244)";
  }
});

$(".main__item__info__bottom > h2").mouseover(function (event) {
  event.target.parentElement.querySelector("p").style.opacity="1";
});
$(".main__item__info__bottom > h2").mouseleave(function (event) {
  event.target.parentElement.querySelector("p").style.opacity="0";
});

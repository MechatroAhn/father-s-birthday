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
  if (now_main == 1) {
    $(".header__bottom > ul > li:nth-child(1)").css({
      backgroundColor: "black",
    });
  }
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
  event.target.parentElement.querySelector("p").style.opacity = "1";
});
$(".main__item__info__bottom > h2").mouseleave(function (event) {
  event.target.parentElement.querySelector("p").style.opacity = "0";
});

let j = 6;
let k = 0;

$(".nav__more").click(function () {
  $(".nav__more").css({ display: "none" });
  $(".nav__sub").css({
    height: "700px",
    gridTemplateRows: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
  });

  for (j = 6; j < 12; j++) {
    const test = document.createElement("div");
    const img = document.createElement("img");
    img.src =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX/AAD/////u7v/6+v/0ND/aWn/mZn/zc3/9fX/h4f/5ub/+Pj/tbX/t7f/oKD/ODj/Kir/3d3/wMD/MzP/UVH/1dX/yMj/qan/lJT/TU3/gID/Fxf/PT3/eHj/Dg7/jY3/ZWX/Q0P/XV3/IiL/cXH/q6v/X1//eXnZjuaVAAAE20lEQVR4nO2d63aiQAyAOyKgXAVF0Lbrtbvv/4YLZ9didUDQQEjI9689RyffwcCQub0p7rxhB9A5YkgfMaSPGNJHDOkjhvQRQ/qIIX3EkD5iSB8xpI8Y0kcM6SOG9BFD+oghfcSQPmJIHzGkjxi+jHEhml4Tff+/6wBeMXTdWU6SrD0/DQIry3Z709yEYbh4e45F/tmNae53WWYFQep76yQpmnDd3gxdw4mi2LPm27O5OZzenzRpy/vpsDHP27nlxVHkGO18Gxo6dmx9HjfLvpzqeF9ujp9WbDtQhnZqPvur65qFmdovGjrBCtviIaug/mLWGdp77Ogbsq+7ktWG0fAvX8kqam+4xQ66JduWhk6IHXFrwop01BuuscN9inVzQw871ifxmhr62JE+jd/MMMGO8wWSJoYudpQvcd9nvTc8Ygf5EsfHhlTvMhfu7ja3hu4JO8QXOd3+Tm8NA+wIXyZ4YIgdHwD1htSzsMCrNTxghwfAoc7QwI4OBKPGcIIdHAiTGsMzdnAgnGsMP7CDA+Gj2tDBjg0Ip9LQxg4NCLvS0MIODQir0vATOzQgPisNedxobm4114Yz7MjAmFUY8ujRFBgVhjRriDrWFYYpdmBgpBWGXB4WPx8X14Y8eqUF5wrDJXZgYCwrDLHjAmSshnwehz8eiFeGlMcrbkm0hjF0M4hTOGKtIfig2iRGm37jaw3Ba6UTpTLo72yIpzWcQzdT1LwMnG7EXGtoQjfzr6qXbKC/twGm1hB84PBSt4x/QX/zQ45aQ/A3/LIy23uf/kNrCH5zv6o9Gz2XgBa9GyoV9ZqOWsMZeLb8HD9QcY/Dy79mGIZ9pqPWMAJv5s5QGb3NB4yQDPub06kznIK3ojPM07GXDvkU0VCpoIcegM4QfuCpylDNwLvAd5TDTyiGSjldp6POEL7iXWOYN9dtZa+sepeGX+Ct1BoqlXaZjl8aQ/ia/gPDTtOxrOtjGubp2NlUT53hDryVx4Z5OnY0KrvTGML/ZJoY5vnfSTqWZQx8w27ScVCGeTr+Bm9bZwjf7W9smKcj9KTIcpFQaQheamtjqJQHm45lsW0whsBpMkhDZezh2h6mYf4GB5aOQzVUygcazBmuoVIwd5zhGnK/htzzkP29lPvzsIc+Da9+6R+NIf93C3k/bM/Q3vH512n419r410v517z5j1vwH3viP37IfwyY/zg+/7kY/OfT8J8TxX9eG/+5iSOYX8p/jjD/ed785+rzX2/Bf80M/3VP/Neu8V9/yH8NKf91wCMw5L8en/+eCvz3xeC/twn//Wn4PBCr9hjiv08U/72+RrBfG5fHRfWee/z3TeS/9yWTW03N/qVMeqZ1e9Dy30eYR6+mbi9o/vt5s9iT3a815FDJuDW6+Zv/2Qj8z7cgn4kPzygZwTkzIzgriPT4RaPznij33XSzsHSGZO82jc9do1pXbHF23gjOP1T8z7BUIziHVPE/S7aA+3nA/68k6zOdy4vJ+Vzuaxifra73dYvD65Nk7flpEFhZttub5ioMw2d/1Yv8syvT3O+yzAqC1PfsJCmacNs5wRk2wrgQTa+Jvv/fdQCdG6IjhvQRQ/qIIX3EkD5iSB8xpI8Y0kcM6SOG9BFD+oghfcSQPmJIHzGkjxjSRwzpI4b0EUP6iCF9/gKCNIdvAhrz/wAAAABJRU5ErkJggg==";
    const span = document.createElement("span");
    span.innerText = `구독${j}`;
    test.append(img, span);
    test.classList.add("nav__item");
    $(".nav__sub").append(test);
  }
});

let filter = 0;

$(".filter__btn").click(function () {
  if (filter == 0) {
    $(".filter__container").slideDown();
    $(".filter__container").css({ display: "flex" });
    filter = 1;
  } else if (filter != 0) {
    $(".filter__container").slideUp();
    filter = 0;
  }
});

$(".article__more__btn").click(function () {
  $(".article__more__btn").css({ display: "none" });

  for (k = 0; k < 3; k++) {
    const div = document.createElement("div");

    div.classList.add("article__item");
    const img2 = document.createElement("img");
    img2.src =
      "https://i.ytimg.com/an_webp/dYwopUKybyc/mqdefault_6s.webp?du=3000&sqp=CKnZ5ZwG&rs=AOn4CLC3hcnYEQ4Pg_hSl3NcNJssdiouEA";

    const div2 = document.createElement("div");
    div2.classList.add("article__item__info");
    const h1 = document.createElement("h1");
    h1.innerText = "맛있다고 소문난 수육 레시피 다 해봤습니다!";
    const div3 = document.createElement("div");
    div3.classList.add("article__item__info__detail");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    span1.innerText = "조회수 115만회";
    span2.innerText = "·";
    span3.innerText = "2주 전";
    div3.append(span1, span2, span3);

    const div4 = document.createElement("div");
    div4.classList.add("article__item__info__user");
    const img3 = document.createElement("img");
    img3.src =
      "https://yt3.ggpht.com/ytc/AMLnZu8O8y0NFhx5hcsE-Zdwg2ouE5QPXjLrI9bL5hV_=s68-c-k-c0x00ffffff-no-rj";
    const h2 = document.createElement("h2");
    h2.innerText = "육식맨 YOOXICMAN";
    div4.append(img3, h2);

    const p = document.createElement("p");
    p.innerText =
      "[육식맨 YOOXICMAN 채널 소개]고기 없이 못 사는 육식주의자를 위한";
    const div5 = document.createElement("div");
    div5.classList.add("article__item__info__type");
    div5.innerText = "4K";
    div2.append(h1, div3, div4, p, div5);

    div.append(img2, div2);

    const article = document.getElementById("article_test");
    article.append(div);
  }
});

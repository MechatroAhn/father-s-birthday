let btn = 0;
$(".nav__btn").click(function(){
    if(btn==0){
        $(".nav__detail").slideDown();
        btn=1;
    } else if(btn==1){
        $(".nav__detail").slideUp();
        btn=0
    }
})
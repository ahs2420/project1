$(function(){
    $('.owl-hero').owlCarousel({
        loop:true,
        nav:true,
        items:1,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false,
        dotsContainer:".owl_hero_dots",
        navContainer:".owl_hero_nav",
        navContainerClass:"owl-nav"
    });
});

$(function(){
    $(window).scroll(function(){
        var windowOffset = $(window).scrollTop();
        var bodyOffset = $('body').offset();
        if(windowOffset>bodyOffset.top){
            $("nav").addClass("active");
        }else{
            $("nav").removeClass("active");
        }
    });
});
$(function(){
    $(".mobile-menu > button").click(function(){
        $(this).next(".sub-menu").toggle(300);
    });
});
$(function(){
    $(".mypage-btn").click(function(){
        $(this).toggleClass("active");
    });
});
function fadeAnimation(target){
    var windowOffset = $(window).scrollTop();
    var windowHeight= window.innerHeight;
    var fadeTarget = $("#"+target).offset().top-windowHeight;
    if(windowOffset>(fadeTarget)){
        $("#"+target).addClass(target);
    }
}
function activeAdd(btn){
    target = $("."+$(btn).data("target"));
    target.addClass("active fadeInRight");
}
function activeRemove(btn){
    target = $("."+$(btn).data("target"));
    target.removeClass("active fadeInRight");
}
function toggleBtn(btn){
    if(!$(btn).hasClass("close")){
        $("nav").addClass("active");
        activeAdd(btn);
        $(btn).addClass("close");
    }else{
        activeRemove(btn);
        $(btn).removeClass("close");
    }
}
function slideToggle(button){
    var target = $($(button).data("target"));
    $(button).toggleClass("icon-rotate");
    target.slideToggle(300);
}
function productNavActive(){
    var windowOffset = $(window).scrollTop();
    var navOffset = $('main').offset().top-$("nav").height();
    if(windowOffset>navOffset){
        $(".product-nav").addClass("active").css("top",$("nav").height()+"px");
        $("section").css("margin-top",$(".product-nav").height()+"px");
    }else{
        $(".product-nav").removeClass("active").css("top","");
        $("section").css("margin-top","0px");
    }
}
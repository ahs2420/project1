$(function(){
    $(".owl-carousel").owlCarousel({
        loop:false,
        nav:false,
        dots:false,
        items:1,
        autoPlay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false
    });
});
$(function(){
    var navOffset = $('.product-nav').offset().top-$("nav").height();
    $(".product-view-btn").click(function(e){
        var target=$(this).attr("href");
        var targetClass=$($(this).data("target"));
        var buttonCover=$(this).parent();
        targetClass.each(function(){
            ("#"+$(this).attr("id")==target)?$(this).addClass("on"):$(this).removeClass("on");
        });
        buttonCover.siblings().removeClass("on");
        buttonCover.addClass("on");
        $("html,body").animate({scrollTop:navOffset},500);
        e.preventDefault(event);
    });
});
$(function(){
    var navOffset = $('.product-nav').offset().top-$("nav").height();
    $(window).scroll(function(){
        var windowOffset = $(window).scrollTop();
        if(windowOffset>navOffset){
            $(".product-nav").addClass("active").css("top",$("nav").height()+"px");
            $("section").css("margin-top",$(".product-nav").height()+"px");
        }else{
            $(".product-nav").removeClass("active").css("top","");
            $("section").css("margin-top","0px");
        }
    });
});
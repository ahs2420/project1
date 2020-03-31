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
    $(".product-view-btn").click(function(e){
        var target=$(this).attr("href");
        var targetClass=$($(this).data("target"));
        var buttonCover=$(this).parent();
        targetClass.each(function(){
            ("#"+$(this).attr("id")==target)?$(this).addClass("on"):$(this).removeClass("on");
        });
        buttonCover.siblings().removeClass("on");
        buttonCover.addClass("on");
        $("html,body").animate({scrollTop:$("main").offset().top-$(this).parent().height()},500);
        e.preventDefault(event);
    });
});
$(function(){
    $(window).scroll(function(){
        productNavActive();
    });
});
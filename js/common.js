$(function(){
    $('.owl-hero').owlCarousel({
        loop:true,
        nav:true,
        items:1,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        dotsContainer:".owl_hero_dots",
        navContainer:".owl_hero_nav",
        navContainerClass:"owl-nav"
    });
});
$(function(){
    $(".toggle-target").click(function(){
        var target = $($(this).data("target"));
        target.toggle(300);
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
    $(".mobile-menu > a").click(function(){
        $(this).next(".sub-menu").toggle(300);
    });
});
$(function(){
    $(".mypage-btn").click(function(){
        $(".mypage-wrap").addClass("active");
        //$("body").css({overflow:"hidden",height:"100vh"});
    });
});
$(function(){
    $(".mypage-close").click(function(){
        $(".mypage-wrap").removeClass("active");
        //$("body").css({overflow:"auto",height:"auto"});
    });
});
$(function(){
    $(".sns-share-btn").click(function(){
        snsFuntion[$(this).data("type")+"Share"](this);
    });
});
$(function(){
    $(".isNumeric").keyup(function(){
        if(!isNumeric($(this).val(), 4)){
            alert("숫자만 입력해 주세요.");
            $(this).val("");
            $(this).focus();
        }
    });
});
$(function(){
    $(".input-count-change").click(function(){
        var func=$(this).data("function");
        var target=$($(this).data("target"));
        var targetVal=parseInt(target.val());
        if(func=="up"){
            ++targetVal;
        }else{
            --targetVal;
        }

        if(isNaN(targetVal)||targetVal<1){
            target.val("1");
        }else{
            target.val(targetVal);
        }
    });
});
var snsFuntion={
    kakaoShare:function(target){
        //<![CDATA[
            // // 사용할 앱의 JavaScript 키를 설정해 주세요.
            // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
            Kakao.init('5df3affc668dd7dacb602ce4ca5fed6a');
            Kakao.Link.createDefaultButton({
                container: "#"+$(target).attr("id"),
                objectType: 'feed',
                content: {
                    title: $(target).data("title"),
                    description: $(target).data("desc"),
                    imageUrl: $(target).data("url")+"/"+$(target).data("img"),
                    link: {
                    mobileWebUrl: $(target).data("url")+$(target).data("page"),
                    webUrl: $(target).data("url")+$(target).data("page")
                    }
                },
                buttons: [
                    {
                    title: '바로가기',
                    link: {
                        mobileWebUrl: $(target).data("url")+$(target).data("page"),
                        webUrl: $(target).data("url")+$(target).data("page")
                    }
                    }
                ]
            });
        //]]>
    },
    facebookShare:function(target){
        window.open("https://www.facebook.com/sharer/sharer.php?u="+$(target).data("url")+"&amp;src=sdkpreparse","faceShare","width=500,height=500,left=50,top=50");
    },
    naverShare:function(target){
        window.open("http://blog.naver.com/openapi/share?url="+$(target).data("url"),"naverShare","width=500,height=500,left=50,top=50");
    },
    kakaoStoryShare:function(target){
        window.open("https://story.kakao.com/share?url="+$(target).data("url"),"kakaoShare","width=500,height=500,left=50,top=50");
    },
    twitterShare:function(target){
        window.open("http://twitter.com/share?url="+$(target).data("url")+"&text="+$(target).data("desc"),"twitterShare","width=500,height=500,left=50,top=50")
    }
}


function fadeAnimation(target){
    var windowOffset = $(window).scrollTop();
    var windowHeight= window.innerHeight;
    var fadeTarget = $("#"+target).offset().top-windowHeight;
    if(windowOffset>(fadeTarget)){
        $("#"+target).addClass(target);
    }
}
function toggleBtn(btn){
    if(!$(btn).hasClass("close")){
        $("nav").addClass("active");
        activeAdd(btn);
        $(btn).addClass("close");
        //$("body").css({overflow:"hidden",height:"100vh"});
    }else{
        activeRemove(btn);
        $(btn).removeClass("close");
        //$("body").css({overflow:"auto",height:"auto"});
    }
}
function activeAdd(btn){
    target = $("."+$(btn).data("target"));
    target.addClass("active fadeInLeft");
}
function activeRemove(btn){
    target = $("."+$(btn).data("target"));
    target.removeClass("active fadeInLeft");
}
function slideToggle(button){
    var target = $($(button).data("target"));
    $(button).toggleClass("icon-rotate");
    target.slideToggle(300);
}
function targetActive(item){
    $(item).toggleClass("on");
    $($(item).data("target")).toggleClass("active");
}

function isNumeric(num, opt){
    // 좌우 trim(공백제거)을 해준다.
    num = String(num).replace(/^\s+|\s+$/g, "");
   
    if(typeof opt == "undefined" || opt == "1"){
      // 모든 10진수 (부호 선택, 자릿수구분기호 선택, 소수점 선택)
      var regex = /^[+\-]?(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
    }else if(opt == "2"){
      // 부호 미사용, 자릿수구분기호 선택, 소수점 선택
      var regex = /^(([1-9][0-9]{0,2}(,[0-9]{3})*)|[0-9]+){1}(\.[0-9]+)?$/g;
    }else if(opt == "3"){
      // 부호 미사용, 자릿수구분기호 미사용, 소수점 선택
      var regex = /^[0-9]+(\.[0-9]+)?$/g;
    }else{
      // only 숫자만(부호 미사용, 자릿수구분기호 미사용, 소수점 미사용)
      var regex = /^[0-9]$/g;
    }
   
    if( regex.test(num) ){
      num = num.replace(/,/g, "");
      return isNaN(num) ? false : true;
    }else{ return false;  }
  }
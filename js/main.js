$(function(){
    $(window).scroll(function(){
        //id값에 애니메이션 이름 추가하면 사용가능
        try {
            fadeAnimation("fadeInUp");
            fadeAnimation("fadeInLeft");
            fadeAnimation("fadeInRight");
        } catch (error) {
            
        }
    });
});
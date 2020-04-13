<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<header>
    <nav>
        <div class="flex-box flex-j-space flex-a-center container top-menu">
            <!--모바일 좌측 메뉴-->
            <div class="dis-mobile flex-box top-menu-m-side">
                <div class="search-btn-cover">
                    <button type="button" data-target="nav-mobile-menu" onclick="toggleBtn(this);"><i class="fas fa-bars"></i></button>
                </div>
            </div>
            <!--모바일 좌측 메뉴+ 마이페이지 메뉴 끝-->
            <!--pc좌측, 모바일 중앙메뉴-->
            <div class="nav-left flex-box flex-j-space top-menu-m-center">
                <div class="logo">
                    <a href="/index.html"><span class="main-color">W</span>a<span class="main-color">T</span>his</a>
                </div>
                <div class="menu dis-pc">
                    <ul class="gnb-menu flex-box position-rel">
                        <li>
                            <a class="hover-underline" href="/sbg0212/reward-list.html">리워드</a>
                            <!-- <ul class="sub-menu">
                                <li><a class="hover-main" href="#">서브메뉴1</a></li>
                                <li><a class="hover-main" href="#">서브메뉴2</a></li>
                                <li><a class="hover-main" href="#">서브메뉴3</a></li>
                                <li><a class="hover-main" href="#">서브메뉴4</a></li>
                                <li><a class="hover-main" href="#">서브메뉴5</a></li>
                            </ul> -->
                        </li>
                        <li>
                            <a class="hover-underline" href="/sbg0212/ex2.html">공지사항</a>
                            <!-- <ul class="sub-menu">
                                <li><a class="hover-main" href="#">서브메뉴1</a></li>
                                <li><a class="hover-main" href="#">서브메뉴2</a></li>
                                <li><a class="hover-main" href="#">서브메뉴3</a></li>
                                <li><a class="hover-main" href="#">서브메뉴4</a></li>
                                <li><a class="hover-main" href="#">서브메뉴5</a></li>
                            </ul> -->
                        </li>
                        <li>
                            <a class="hover-underline" href="#">메뉴3</a>
                            <!-- <ul class="sub-menu">
                                <li><a class="hover-main" href="#">서브메뉴1</a></li>
                                <li><a class="hover-main" href="#">서브메뉴2</a></li>
                                <li><a class="hover-main" href="#">서브메뉴3</a></li>
                                <li><a class="hover-main" href="#">서브메뉴4</a></li>
                                <li><a class="hover-main" href="#">서브메뉴5</a></li>
                            </ul> -->
                        </li>
                        <li>
                            <a class="hover-underline" href="#">메뉴4</a>
                            <ul class="sub-menu">
                                <li><a class="hover-main" href="#">서브메뉴1</a></li>
                                <li><a class="hover-main" href="#">서브메뉴2</a></li>
                                <li><a class="hover-main" href="#">서브메뉴3</a></li>
                                <li><a class="hover-main" href="#">서브메뉴4</a></li>
                                <li><a class="hover-main" href="#">서브메뉴5</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="nav-right flex-box dis-pc">
                <div class="search-btn-cover">
                    <button type="button" data-target="search-cover" onclick="activeAdd(this)"><i class="fas fa-search"></i></button>
                </div>
                <div class="login-cover pl20">
                    <button class="mypage-btn icon-round bg-img icon-40" style="background-image: url(/images/common/profile-1.png);"></button>
                    <a class="hover-main" href="/keep12/log-one.html">로그인/회원가입</a>
                    <!-- <a class="pl10 hover-main" href="#">회원가입</a> -->
                </div>
                <div class="alerm-cover pl20">
                    <a class="btn-stan btn-alerm laptop-dis-none" href="/keep12/mypage.html">펀딩오픈 신청하기</a>
                </div>
            </div>
            <div class="dis-mobile flex-box top-menu-m-side">
                <div class="search-btn-cover">
                    <a href="/keep12/log-one.html"><i class="fas fa-sign-in-alt"></i></a><!--로그인-->
                    <button class="mypage-btn icon-round bg-img icon-40" style="background-image: url(/images/common/profile-1.png);"></button>
                </div>
            </div>
        </div>
        <div class="search-cover dis-pc">
            <div class="container">
                <form action="" method="GET" name="nav-search">
                    <button type="submit" class="search-btn"><i class="fas fa-search"></i></button>
                    <input type="text" class="search-bar input-stan" placeholder="어떤 프로젝트를 찾고 계신가요?">
                    <button type="button" class="search-btn close right" data-target="search-cover" onclick="activeRemove(this)"><i class="fas fa-times"></i></button>
                </form>
            </div>
        </div>
        <!--모바일 삼선 메뉴-->
        <div class="nav-mobile-menu">
            <ul class="gnb-mobile-menu">
                <li>
                    <div class="search-cover dis-pc">
                        <div class="container">
                            <form action="" method="GET" name="nav-search">
                                <button type="submit" class="search-btn"><i class="fas fa-search"></i></button>
                                <input type="text" class="search-bar input-stan" placeholder="어떤 프로젝트를 찾고 계신가요?">
                            </form>
                        </div>
                    </div>
                </li>
                <!-- <li class="flex-box flex-j-center">
                    <a class="hover-main" href="#">로그인</a>
                    <a class="pl10 hover-main" href="#">회원가입</a>
                </li> -->
                <li class="mobile-menu">
                    <a href="/sbg0212/reward-list.html">리워드</a>
                </li>
                <li class="mobile-menu">
                    <a href="/sbg0212/ex2.html">공지사항</a>
                    <!-- <ul class="sub-menu">
                        <li><a class="hover-main" href="#">서브메뉴1</a></li>
                        <li><a class="hover-main" href="#">서브메뉴2</a></li>
                        <li><a class="hover-main" href="#">서브메뉴3</a></li>
                        <li><a class="hover-main" href="#">서브메뉴4</a></li>
                        <li><a class="hover-main" href="#">서브메뉴5</a></li>
                    </ul> -->
                </li>
                <li class="mobile-menu">
                    <a href="#">메뉴3</a>
                    <!-- <ul class="sub-menu">
                        <li><a class="hover-main" href="#">서브메뉴1</a></li>
                        <li><a class="hover-main" href="#">서브메뉴2</a></li>
                        <li><a class="hover-main" href="#">서브메뉴3</a></li>
                        <li><a class="hover-main" href="#">서브메뉴4</a></li>
                        <li><a class="hover-main" href="#">서브메뉴5</a></li>
                    </ul> -->
                </li>
                <li class="mobile-menu">
                    <a href="#">메뉴4</a>
                    <ul class="sub-menu dis-none">
                        <li><a class="hover-main" href="#">서브메뉴1</a></li>
                        <li><a class="hover-main" href="#">서브메뉴2</a></li>
                        <li><a class="hover-main" href="#">서브메뉴3</a></li>
                        <li><a class="hover-main" href="#">서브메뉴4</a></li>
                        <li><a class="hover-main" href="#">서브메뉴5</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        <!--모바일 삼선메뉴 끝-->
        <!--회원 마이페이지 - 우측메뉴-->
        <div class="mypage-wrap">
            <div class="mypage-close mypage-cover"></div>
            <div class="mypage-menu">
                <button class="mypage-close mypage-close-btn"></button>
                <div class="mypage-profile">
                    <div class="icon-round bg-img icon-50 m-0a" style="background-image: url(/images/common/profile-1.png);">
                    </div>
                    <p class="mt10">XXXX님</p>
                    <p class="mt5">XXXXXXXXXXXXXXXXX@naver.com</p>
                </div>
                <div class="mypage-link">
                    <ul>
                        <li><a class="flex-box w-100p flex-j-space align-center" href="#"><span><i class="fas fa-gift"></i> 펀딩한프로젝트</span><i class="fas fa-chevron-right"></i></a></li>
                        <li><a class="flex-box w-100p flex-j-space align-center" href="#"><span><i class="fas fa-marker"></i> 제작한 프로젝트</span><i class="fas fa-chevron-right"></i></a></li>
                        <li><a class="flex-box w-100p flex-j-space align-center" href="#"><span><i class="fas fa-cog"></i> 설정</span><i class="fas fa-chevron-right"></i></a></li>
                        <li><a class="flex-box w-100p flex-j-space align-center" href="#"><span><i class="fas fa-power-off"></i> 로그아웃</span><i class="fas fa-chevron-right"></i></a></li>
                    </ul>
                </div>
            </div>

        </div>
        <!--회원 마이페이지 - 우측메뉴 끝-->
    </nav>
    <!--슬라이드 이미지 1개일때는 .hero.item-only추가-->
    <div class="hero">
        <div class="owl-carousel owl-hero owl-theme">
            <div class="item">
                <a href="/product.html">
                    <div class="bg-hero-cover">
                        <div class="bg-img bg-main" style="background-image: url(/images/main/main_1.jpg);"></div>
                        <div class="container bg-txt">
                            <div class="small-title"></div>
                            <h1 class="title mb20">잘 먹고 잘 쉬기<br>만원 혜택 받고 시작해요</h1>
                            <div class="sub-title">IT</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="item">
                <a href="/product.html">
                    <div class="bg-hero-cover">
                        <div class="bg-img bg-main" style="background-image: url(/images/main/main_2.jpg);"></div>
                        <div class="container bg-txt">
                            <div class="small-title"></div>
                            <h1 class="title mb20">잘 먹고 잘 쉬기<br>만원 혜택 받고 시작해요</h1>
                            <div class="sub-title">IT</div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="item">
                <a href="/product.html">
                    <div class="bg-hero-cover">
                        <div class="bg-img bg-main" style="background-image: url(/images/main/main_3.jpg);"></div>
                        <div class="container bg-txt">
                            <div class="small-title"></div>
                            <h1 class="title mb20">잘 먹고 잘 쉬기<br>만원 혜택 받고 시작해요</h1>
                            <div class="sub-title">IT</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
        <!--슬라이더 버튼-->
        <div class="owl_hero_cotainer container flex-box flex-j-space flex-a-flexend">
            <div class="owl_hero_dots owl-dots"></div>
            <div class="owl_hero_nav owl-dots"></div>
        </div>
    </div>
</header>
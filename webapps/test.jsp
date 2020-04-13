<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
    String main= (request.getParameter("main")!=null)?request.getParameter("main"):"index";
    String fileurl = "/total/"+main+".jsp";
    final String header= "/total/header.html";
    final String footer= "/total/footer.html";
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="상품페이지">
    <meta name="keywords" content="클라우드펀딩,ㄴㄴㄴ">

    <link rel="shortcut icon" href="/images/common/favicon.png" type="image/x-icon">
    <meta name="og:title" content="와디지-상품"> 
    <meta property="og:url" content="/product.html" />
    <meta name="og:description" content="[마지막앵콜] 다리에도 베개가 필요해요">
    <meta property="og:type" content="website" />
    <meta name="og:image" content="https://www.krahs123.co.kr/images/main/main_1.jpg">

    <meta name="twitter:title" content="와디지-상품"> 
    <meta name="twitter:description" content="[마지막앵콜] 다리에도 베개가 필요해요">
    <meta name="twitter:image" content="/images/main/main_1.jpg">
    <meta name="twitter:card" content="photo " />

    <title>와디지 상품</title>
    <link rel="stylesheet" href="/css/owl/owl.carousel.css">
    <link rel="stylesheet" href="/css/owl/owl.theme.default.css">
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/common.css">
    <link rel="stylesheet" href="/css/<%=main%>.css">
    <link rel="stylesheet" href="/css/animation.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">
    <script src="https://kit.fontawesome.com/5cf91d4eb4.js" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <script src="/js/owl/owl.carousel.js"></script>
    <script src="/js/common.js"></script>
    <script src="/js/<%=main%>.js"></script>
    <script src="/js/snsShare.js"></script>
</head>
<body>
    <jsp:include page="/total/header.jsp" flush="true"/>
    <jsp:include page="<%=fileurl%>" /> 
    <jsp:include page="/total/footer.jsp" flush="true"/>
</body>
</html>
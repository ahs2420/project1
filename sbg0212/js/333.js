@import "compass/css3";

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
$openSans: 'Open Sans', Helvetica, Arial, sans-serif;
html, body {
  font-size: 62.5%;
  height: 100%;
  overflow: hidden;
  
  @media (max-width: 768px) {
    font-size: 50%;
  }
}
svg {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  overflow: visible;
}
.svg-icon {
  cursor: pointer;

  path {
    stroke: rgba(255,255,255,0.9);
    fill: none;
    stroke-width: 1;
  }
}
input, button {
  outline: none;
  border: none;
}
.cont {
  position: relative;
  height: 100%;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/slider-2.jpg');
  background-size: cover;
  overflow: auto;
  font-family: $openSans;
}
.demo {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -15rem;
  margin-top: -26.5rem;
  width: 30rem;
  height: 53rem;
  overflow: hidden;
}
.login {
  position: relative;
  height: 100%;
  background: linear-gradient(to bottom, rgba(146, 135, 187, 0.8) 0%, rgba(0,0,0,0.6) 100%);
  transition: opacity 0.1s, transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);
  transform: scale(1);
  
  &.inactive {
    opacity: 0;
    transform: scale(1.1);
  }
  
  &__check {
    position: absolute;
    top: 16rem;
    left: 13.5rem;
    width: 14rem;
    height: 2.8rem;
    background: #fff;
    transform-origin: 0 100%;
    transform: rotate(-45deg);
    
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 100%;
      width: 2.8rem;
      height: 5.2rem;
      background: #fff;
      box-shadow: inset -0.2rem -2rem 2rem rgba(0,0,0,0.2);
    }
  }
  
  &__form {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 50%;
    padding: 1.5rem 2.5rem;
    text-align: center;
  }
  
  &__row {
    height: 5rem;
    padding-top: 1rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }
  
  &__icon {
    margin-bottom: -0.4rem;
    margin-right: 0.5rem;
    
    &.name path {
      stroke-dasharray: 73.50196075439453;
      stroke-dashoffset: 73.50196075439453;
      animation: animatePath 2s 0.5s forwards;
    }
    &.pass path {
      stroke-dasharray: 92.10662841796875;
      stroke-dashoffset: 92.10662841796875;
      animation: animatePath 2s 0.5s forwards;
    }
  }
  
  &__input {
    display: inline-block;
    width: 22rem;
    height: 100%;
    padding-left: 1.5rem;
    font-size: 1.5rem;
    background: transparent;
    color: #FDFCFD;
  }
  
  &__submit {
    position: relative;
    width: 100%;
    height: 4rem;
    margin: 5rem 0 2.2rem;
    color: rgba(255,255,255,0.8);
    background: #FF3366;
    font-size: 1.5rem;
    border-radius: 3rem;
    cursor: pointer;
    overflow: hidden;
    transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
    
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -1.5rem;
      margin-top: -1.5rem;
      width: 3rem;
      height: 3rem;
      border: 2px dotted #fff;
      border-radius: 50%;
      border-left: none;
      border-bottom: none;
      transition: opacity 0.1s 0.4s;
      opacity: 0;
    }
    
    &.processing {
      width: 4rem;
      font-size: 0;
      
      &:after {
        opacity: 1;
        animation: rotate 0.5s 0.4s infinite linear;
      }
    }
    
    &.success {
      transition: transform 0.3s 0.1s ease-out, opacity 0.1s 0.3s, background-color 0.1s 0.3s;
      transform: scale(30);
      opacity: 0.9;
      //background-color: rgba(255,255,255,0.95);
      
      &:after {
        transition: opacity 0.1s 0s;
        opacity: 0;
        animation: none;
      }
    }
  }
  
  &__signup {
    font-size: 1.2rem;
    color: #ABA8AE;
    
    a {
      color: #fff;
      cursor: pointer;
    }
  }
  
}

.app {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: none;
  transition: opacity 0.1s, transform 0.3s cubic-bezier(0.68, -0.45, 0.465, 1.25);
  transform: scale(1.2);
  
  &.active {
    opacity: 1;
    transform: scale(1);
    
    .app__user-photo {
      transform: scale(1);
    }
    
    .app__meeting {
      transform: translateY(0);
      opacity: 1;
    }
    
    .app__logout {
      transform: scale(1);
    }
  }

  &__top {
    position: relative;
    height: 28rem;
    background: rgba(0,0,0,0.5);
    padding: 6rem 1.5rem 2rem;
    text-align: center;
  }

  &__bot {
    position: relative;
    height: 25rem;
    background: #fff;
  }
  
  &__menu-btn {
    position: absolute;
    top: 2rem;
    left: 1.5rem;
    width: 1.8rem;
    height: 1.7rem;
    cursor: pointer;
    
    span,
    &:before,
    &:after {
      position: absolute;
      left: 0;
      width: 100%;
      height: 1px;
      background: rgba(255,255,255,0.6);
    }
    
    span {
      top: 0.8rem;
    }
    &:before {
      content: "";
      top: 0;
    }
    &:after {
      content: "";
      bottom: 0;
    }
  }

  &__icon {
    position: absolute;
    top: 2rem;

    &.search {
      right: 1.5rem;
      stroke-dasharray: 61.847137451171875;
      stroke-dashoffset: 61.847137451171875;
      animation: animatePath 0.5s 0.5s forwards;
    }
  }
  
  &__hello {
    font-size: 2.2rem;
    color: #fff;
    font-weight: normal;
    margin-bottom: 3rem;
  }
  
  &__user {
    position: relative;
    display: inline-block;
    width: 9rem;
    height: 9rem;
    margin-bottom: 3rem;
  }
  &__user-photo {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: transform 0.3s 0.2s cubic-bezier(.62,.35,.56,1.55);
    transform: scale(0);
  }
  &__user-notif {
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    line-height: 3rem;
    text-align: center;
    background: #50D2C2;
    color: #fff;
    font-size: 1.5rem;
  }
  
  &__month:after {
    content: "";
    display: table;
    clear: both;
  }
  
  &__month-name {
    display: inline-block;
    color: rgba(255,255,255,0.6);
    font-size: 1.2rem;
    text-transform: uppercase;
  }
  
  &__month-btn {
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    border: 1px solid rgba(255,255,255,0.6);
    border-left: none;
    border-bottom: none;
    cursor: pointer;
    
    &.left {
      float: left;
      transform: rotate(-135deg);
    }
    
    &.right {
      float: right;
      transform: rotate(45deg);
    }
  }
  
  &__days {
    height: 7rem;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  &__day {
    width: 14%;
    text-align: center;
    font-size: 1.2rem;
    
    &.weekday {
      color: #919197;
      text-transform: uppercase;
    }
    &.date {
      font-size: 1.2rem;
      font-weight: bold;
      color: #3C3C43;
    }
  }
  
  &__meeting {
    position: relative;
    height: 6rem;
    border-top: 1px solid #EEEEEF;
    padding: 1rem 2rem 1rem 7.5rem;
    transition: transform 0.3s, opacity 0.3s;
    transform: translateY(-50%);
    opacity: 0;
    
    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        transition-delay: 0.1s + 0.1s * $i;
      }
    }
    
    &-photo {
      position: absolute;
      left: 2rem;
      top: 1rem;
      width: 4rem;
      height: 4rem;
    }
    &-name {
      color: #000;
      font-size: 1.3rem;
    }
    &-info {
      color: #949498;
      font-size: 1.1rem;
    }
  }
  
  &__logout {
    position: absolute;
    bottom: 3.3rem;
    right: 3.3rem;
    width: 4.6rem;
    height: 4.6rem;
    margin-right: -2.3rem;
    margin-bottom: -2.3rem;
    background: #FC3768;
    color: #fff;
    font-size: 2rem;
    border-radius: 50%;
    cursor: pointer;
    transition: bottom 0.4s 0.1s, right 0.4s 0.1s, transform 0.4s 0.4s, opacity 0.1s 0.7s, background-color 0.1s 0.7s;
    transform: scale(0);
    
    &.clicked {
      bottom: 50%;
      right: 50%;
      transform: scale(30) !important;
      opacity: 0.9;
      //background-color: rgba(255,255,255,0.95);
      
      svg {
        opacity: 0;
      }
    }
    
    &-icon {
      position: absolute;
      width: 3rem;
      height: 3rem;
      top: 50%;
      left: 50%;
      margin-left: -1.5rem;
      margin-top: -1.5rem;
      transition: opacity 0.1s;
      
      path {
        stroke-width: 4px;
        stroke-dasharray: 64.36235046386719;
        stroke-dashoffset: 64.36235046386719;
        animation: animatePath 0.5s 0.5s forwards;
      }
    }
  }
  
}

.ripple {
  position: absolute;
  width: 15rem;
  height: 15rem;
  margin-left: -7.5rem;
  margin-top: -7.5rem;
  background: rgba(0,0,0,0.4);
  transform: scale(0);
  animation: animRipple 0.4s;
  border-radius: 50%;
}
@keyframes animRipple {
  to {
    transform: scale(3.5);
    opacity: 0;
  }
}
@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes animatePath {
  to {
    stroke-dashoffset: 0;
  }
}
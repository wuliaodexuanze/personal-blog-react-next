import styled from 'styled-components';

export const LoadingWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(255,255,255,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: display 1s ease .5s;
  z-index: 999;

  .loader-logo {
      width: 50px;
      height: 50px;
      position: fixed;
      left: 20%;
      top: 55%;
  }


  .cssload-preloader {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      z-index: 999;
      background: rgba(255, 255, 255, .5);
  }

  .cssload-preloader > .cssload-preloader-box {
      position: absolute;
      height: 30px;
      top: 50%;
      left: 50%;
      margin: 50px 0 0 -88px;
      perspective: 195px;
      -o-perspective: 195px;
      -ms-perspective: 195px;
      -webkit-perspective: 195px;
      -moz-perspective: 195px;
  }

  .cssload-preloader .cssload-preloader-box > div {
      position: relative;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: rgb(204, 204, 204);
      float: left;
      text-align: center;
      line-height: 29px;
      font-family: Verdana;
      font-size: 19px;
      color: rgb(255, 255, 255);
  }

  .cssload-preloader .cssload-preloader-box > div:nth-child(1) {
      background: rgb(57, 96, 188);
      margin-right: 15px;
      animation: cssload-movement 690ms ease 0ms infinite alternate;
      -o-animation: cssload-movement 690ms ease 0ms infinite alternate;
      -ms-animation: cssload-movement 690ms ease 0ms infinite alternate;
      -webkit-animation: cssload-movement 690ms ease 0ms infinite alternate;
      -moz-animation: cssload-movement 690ms ease 0ms infinite alternate;
  }

  .cssload-preloader .cssload-preloader-box > div:nth-child(2) {
      background: rgb(57, 96, 188);
      margin-right: 15px;
      animation: cssload-movement 690ms ease 86.25ms infinite alternate;
      -o-animation: cssload-movement 690ms ease 86.25ms infinite alternate;
      -ms-animation: cssload-movement 690ms ease 86.25ms infinite alternate;
      -webkit-animation: cssload-movement 690ms ease 86.25ms infinite alternate;
      -moz-animation: cssload-movement 690ms ease 86.25ms infinite alternate;
  }

  .cssload-preloader .cssload-preloader-box > div:nth-child(3) {
      background: rgb(57, 96, 188);
      margin-right: 15px;
      animation: cssload-movement 690ms ease 172.5ms infinite alternate;
      -o-animation: cssload-movement 690ms ease 172.5ms infinite alternate;
      -ms-animation: cssload-movement 690ms ease 172.5ms infinite alternate;
      -webkit-animation: cssload-movement 690ms ease 172.5ms infinite alternate;
      -moz-animation: cssload-movement 690ms ease 172.5ms infinite alternate;
  }

  .cssload-preloader .cssload-preloader-box > div:nth-child(4) {
      background: rgb(57, 96, 188);
      margin-right: 15px;
      animation: cssload-movement 690ms ease 258.75ms infinite alternate;
      -o-animation: cssload-movement 690ms ease 258.75ms infinite alternate;
      -ms-animation: cssload-movement 690ms ease 258.75ms infinite alternate;
      -webkit-animation: cssload-movement 690ms ease 258.75ms infinite alternate;
      -moz-animation: cssload-movement 690ms ease 258.75ms infinite alternate;
  }


  @keyframes cssload-movement {
      from {
          transform: scale(1.0) translateY(0px) rotateX(0deg);
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
      to {
          transform: scale(1.5) translateY(-24px) rotateX(45deg);
          box-shadow: 0 24px 39px rgb(57, 96, 188);
          background: rgb(57, 96, 188);
      }
  }

  @-o-keyframes cssload-movement {
      from {
          -o-transform: scale(1.0) translateY(0px) rotateX(0deg);
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
      to {
          -o-transform: scale(1.5) translateY(-24px) rotateX(45deg);
          box-shadow: 0 24px 39px rgb(57, 96, 188);
          background: rgb(57, 96, 188);
      }
  }

  @-ms-keyframes cssload-movement {
      from {
          -ms-transform: scale(1.0) translateY(0px) rotateX(0deg);
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
      to {
          -ms-transform: scale(1.5) translateY(-24px) rotateX(45deg);
          box-shadow: 0 24px 39px rgb(57, 96, 188);
          background: rgb(57, 96, 188);
      }
  }

  @-webkit-keyframes cssload-movement {
      from {
          -webkit-transform: scale(1.0) translateY(0px) rotateX(0deg);
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
      to {
          -webkit-transform: scale(1.5) translateY(-24px) rotateX(45deg);
          box-shadow: 0 24px 39px rgb(57, 96, 188);
          background: rgb(57, 96, 188);
      }
  }

  @-moz-keyframes cssload-movement {
      from {
          -moz-transform: scale(1.0) translateY(0px) rotateX(0deg);
          box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      }
      to {
          -moz-transform: scale(1.5) translateY(-24px) rotateX(45deg);
          box-shadow: 0 24px 39px rgb(57, 96, 188);
          background: rgb(57, 96, 188);
      }
  }
`;
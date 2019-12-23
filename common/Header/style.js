import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: relative;
  background: #fff;
  z-index: 99;
  .top {
    height: 100px;
  }
  .logo {
    float: left;
    width: 330px;

    img {
      float: left;
      margin-top: 10px;
      width: 80px;
    }

    .page-title {
      line-height: 100px;
      font-size: 1.5em;
      text-indent: .5em;
    }
  }
  .title {
    float: left;
    margin-top: 25px;
    margin-left: 20px;
    padding: 5px 0;
    line-height: 60px;
    font-size: 16px;
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }

  .contact {
    float: right;
    display: none;

    @media(min-width: 992px){
      margin-top: 35px;
      display: inline-block;
    }

    li {
      position: relative;
      display: inline-block;
      padding: 0 10px;
    }

    .weixin {
      position: absolute;
      left: -50%;
      top: 42px;
      padding: 8px;
      width: 100px;
      height: 100px;
      background: #fff;
      border-radius: 5px;
      border: 1px solid #e5e5e5;
      display: none;
      z-index: 9;

      &:before {
        position:absolute;
        left:40%;
        top:-16px;
        display:block;
        content:'';
        border-width:8px 8px 8px 8px;
        border-style:solid;
        border-color:transparent transparent #e5e5e5 transparent;
      }
      &:after {
        position:absolute;
        left:40%;
        top:-15px;
        display:block;
        content:'';
        border-width:8px 8px 8px 8px;
        border-style:solid;
        border-color:transparent transparent #fff transparent;
      }
    }

    .link {
      color: #09f;
      -webkit-transition: all .4s;
      -moz-transition: all .4s;
      -o-transition: all .4s;
      -ms-transition: all .4s;
      transition: all .4s;

      &:hover {
        text-shadow: 0 0 20px #046bb0;
	      color: #f1f1f1;

        .weixin {
          display: block;
        }
      }
    }

  }
`;

export const NavWrapper = styled.nav `
  height: auto;
  background-color: #0090ce;

  .hide {
    display: none!important;
  }

  .nav {
    padding-right: 0;
    padding-left: 0;
  }
  .navbar-header {
    @media (min-width: 768px) {
      display: block;
    }
  }

  .toggle-search-btn,
  .navbar-toggle,
  .mainmenu {
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    padding: 6px 12px;
    display: block;
    -webkit-box-shadow: -1px 0 0 rgba(255,255,255,0.1);
    box-shadow: -1px 0 0 rgba(255,255,255,0.1);
    display: inline-block;
  }
  .toggle-search-btn:hover,
  .toggle-search-btn.active,
  .navbar-toggle:hover,
  .navbar-toggle.active {
    background: rgba(0,0,0,0.15);
    color: #fff;
  }
  .navbar-toggle {
    @media (min-width: 768px) {
      float: right;
      display: none;
    }
  }
  .navbar-search-btn {
    float: right;
  }
  .navbar-search-input {
    float: right;

    .search-expand {
      z-index: 2;
    }
    .search-expand-inner {
      padding: 5px 5px 4px 5px;
      background-color: rgba(0,0,0,0.15);
    }

    .opacity-enter {
      opacity: 0;
    }
    .opacity-enter-active {
      opacity: 1;
      transition: all .3s ease-in;
    }
    .opacity-enter-done {
      opacity: 1;
    }
    .opacity-exit {
      opacity: 1;
    }
    .opacity-exit-active {
      opacity: 0;
      transition: all .3s ease-out;
    }
    .opacity-exit-done {
      opacity: 0;
    }
  }

  .search {
    line-height: 31px;
    border: 0;
    padding: 2px 2px 2px 10px;
    color: #666;
    &::placeholder {
      color: #c5c5c5;
    }
  }

  .navbar-collapse {
    position: absolute;
    visibility: hidden;
    overflow: hidden;
    background-color: #0090ce;

    @media (min-width: 768px) {
      position: relative !important;
      visibility: visible !important;
      display: block !important;
      width: auto !important;
      height: auto !important;
    }

    ul {
      @media (min-width: 768px) {
        font-size: 0;
      }
    }

    .menu-item {
      position: relative;
      display: block;

      @media (min-width: 768px) {
        display: inline-block;
      }
      @media (min-width: 992px) {
        display: inline-block;
      }
      @media (min-width: 1200px) {
        display: inline-block;
      }

      a {
        display: block;
        font-size: 16px;
        line-height: 45px;
        padding: 0 25px 0 23px;
        color: #fff;
        text-shadow: 0 1px 0 rgba(0,0,0,0.3);
        transition: all .1s ease-in;

        &:hover {
          background: rgba(0,0,0,0.1);
        }
      }
    }

    .current_page_item {
      a {
        background-color: rgba(0,0,0,0.2);
      }
    }
  }
`;
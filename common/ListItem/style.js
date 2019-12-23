/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 22:24:49
 */
import styled from 'styled-components';

export const ListItemWrapper = styled.article`
  position: relative;
  margin-bottom: 20px;
  background-color: white;
  padding: 20px;
  border: 1px solid #ececec;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 10px;
  }

  .title {
    display: inline-block;
    padding-bottom: 15px;
    font-weight: 500;
    word-wrap: break-word;
    padding-top: 5px;
    .text {
      font-size: 1.2em;
      color: #000;
      &:hover {
        color: #00a4dc;
      }
    }

    @media (max-width: 768px) {
      padding-right: 11%;
    }
  }
  
  .category {
    margin-right: 5px;
    color: #1f9dd4;

    a {
      color: #fff!important;
      padding: 2px 5px;
      background-color: #0090ce;
      font-size: .9em!important;
      opacity: .88;
    }

    span {
      position: relative;
      left: -1px;
    }
  }

  .viewimg {
    float: left;
    margin-right: 2%;
    img {
      width: 160px;
      height: 120px;
      padding: 3px;
      border: 1px solid #e5e5e5;
      object-fit: cover;

      @media (max-width: 768px) {
        width: 100px;
        height: 90px;
      }
    }

    .ipic {
      position: relative;
      display: block;

      &:hover {
        .shine {
          background-position: 160px center;
          transition: all .5s ease-in-out;
        }
      }
    }
  }

  .shine {
    z-index: 3;
    position: absolute;
    top: 0;
    left: 0;
    width: 160px;
    height: 120px;
    background: url('./static/imgs/shine_brands.png') no-repeat -160px 0;
    margin: 4px;

    @media (max-width: 768px) {
      width: 100px;
      height: 90px;
    }
  }

  .preview {
    font-size: .9em;
    color: #737373;
    height: 86px;

    @media (max-width: 768px) {
      height: 90px;
    }
  }
  .preem {
    margin-top: 10px;
    line-height: 2;

    @media (max-width: 450px) {
      display: none;
    }

    .item {
      margin-right: 10px;
      font-size: .9em;
      color: #333;
    }

    .fa {
      margin-right: 5px;
      color: #666;
    }
    a {
      font-size: .9em;
      color: #333;
      
      &:hover {
        color: #0086e3;
      }
    }
  }

  .more {
    float: right;
    padding: 2px 10px;
    margin-top: -2px;
    &:hover {
      border-radius: 2px;
      background: #0086e3;
      color: #fff!important;
    }

    @media (max-width: 320px) {
      display: none;
    }
  }
`;
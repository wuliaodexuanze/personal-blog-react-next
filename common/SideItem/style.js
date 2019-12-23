/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 22:24:02
 */
import styled from 'styled-components';

export const SideItemWrapper = styled.section `
  margin-bottom: 20px;
  background-color: #fff;
  
  .head {
    color: #000;
    padding-left: 10px;
    font-size: 15px;
    line-height: 35px;
    display: inherit;
    border: 1px solid #ececec;

    .fa {
      color: #666;
    }
  }

  .list {
    padding: 10px;
    border: 1px solid #ececec;
    border-top: 0;

    .item {
      border-bottom: 1px solid #eee;
      padding: 3px 0;
    }
  }

  .sideshow {
    padding: 10px 0;
    height: auto;
    overflow: auto;

    .title {
      margin-right: 5px;
    }

    img {
      height: 60px;
      width: 80px;
      float: left;
      margin: 0 10px 0 0;
      border: 1px solid #ececec;
      background: #fff;
    }

    a {
      vertical-align: baseline;
      font-size: .8em!important;
      color: #666;

      &:hover {
        color: #00a4dc;
        text-decoration: underline;
      }
    }
  }

  .datetime {
    color: #bbb;
    font-size: 0.8em;
  }
`;
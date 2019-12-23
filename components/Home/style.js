/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 22:23:14
 */
import styled from 'styled-components';

export const HomeWrapper = styled.div `
  
  .list-box {
    padding-top: 20px;

    .paging {
      text-align: center;

      a, li {
        box-sizing: border-box!important;
      }
    }
  }
`;

export const CarouselWrapper = styled.div `
  position: relative;

  .slide-box {
    
    .item {
      position: relative;
      max-height: 260px;
      overflow: hidden;

      img {
        object-fit: contain;
      }

      .title {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2.8em;
        line-height: 2.6em;
        text-indent: 2em;
        font-size: 1.2em;
        background: rgba(0,0,0,.6);

        @media (max-width: 768px) {
          height: 2.5em;
          line-height: 1.8em;
          text-indent: 1em;
          font-size: .8em;
        }
        
        a {
          color: #d8d8d8;

          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
`;
/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 22:24:02
 */
import styled from 'styled-components';

export const TagItemWrapper = styled.section `
  background: #fff;

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
  }
  .item {
    padding: 3px 0;
    display: inline-block;
    width: 50%;
    border-bottom: 0;
    margin-bottom: 4px;

    .item-list {
      padding: 0 5px;
    }

    a {
      display: block;
      background: #f3f3f3;
      border-radius: 50%;
      text-align: center;
      font-size: .8em;
      color: #333;
      &:hover {
        color: #00a4dc;
        text-decoration: underline;
      }
    }
  }
`;
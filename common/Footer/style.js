/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 22:47:26
 */
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  clear: both;
	margin-top: 40px;
	padding: 20px 10px;
	background: #333;
	color: #fff;
	font-size: 12px;
	line-height: 22px;

  .group {
    float: left;
    width: 10%;
    box-sizing: border-box;
    padding: 0 30px 20px 0;
    font-size: 12px;
    overflow: hidden;
    width: 33%;
    color: #fff;
    display: none;

    h3 {
      color: #fff;
    }

    @media (min-width: 768px) {
      display: block;
    }
  }

  .group li, .group li a, .ffooter, .ffooter a {
    color: #999;
  }

  .group li a:hover {
    text-decoration: underline;
  }

  .ffooter {
    padding-top: 10px;
    border-top: none;

    @media (min-width: 768px) {
      border-top: 1px solid rgba(255,255,255,.065);
    }
    text-align: center;
  }
`;
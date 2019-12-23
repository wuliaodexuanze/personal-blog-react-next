import styled from 'styled-components';

export const AboutWrapper = styled.section`
  margin-top: 20px;

  .article {
    background-color: #fff;
    padding: 20px;
    border: 1px solid #ececec;
    overflow: hidden;
  }

  .map {
    padding-left: 15px;
    line-height: 35px;
    display: inherit;
    margin: -20px -20px 10px -20px;
    border: 1px solid #ececec;
    border-top: 0;
    border-left: none;
    border-right: 0;

    span, a {
      font-size: 14px;
      color: #888;
    }

    a:hover {
      color: #00a4dc;
    }
  }
  .title {
    margin-bottom: 20px;
    padding-top: 15px;
    padding-bottom: .3em;
    font-size: 24px;
    color: #404040;
    border-bottom: 1px dashed #ddd;
  }
`;
import styled from 'styled-components';

export const TagsWrapper = styled.div`
  
  .top {
    padding: 10px;
    border: 1px solid #ececec;
    border-bottom: 0;
    background: #fff;
  }

  .tag-list {
    padding: 20px 0 10px;

    a {
      display: inline-block;
      height: auto;
      margin-right: 8px;
      padding: 0 7px;
      font-size: 12px;
      line-height: 20px;
      white-space: nowrap;
      border: 1px solid #adc6ff;
      color: #2f54eb;
      background: #f0f5ff;
      opacity: .85;

      &:hover {
        background: #046bb0;
        color: #fff;
        border-color: #046bb0;
      }
    }

    .active {
      background: #046bb0;
      color: #fff;
      border-color: #046bb0;
    }
  }

  .paging {
    margin: 20px;
    overflow: hidden;
    margin-left: 0px;
    text-align: center;
    font-size: 12px
  }
`;

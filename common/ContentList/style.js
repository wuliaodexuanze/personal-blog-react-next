import styled from 'styled-components';

export const ContentListWrapper = styled.div`
  .map {
    background: #fafafa;
    padding: 10px;
    border: 1px solid #ececec;
    border-bottom: 0;
  }
  .tit {
    font-size: 1.5em;
    padding-top: .5em;
  }

  .empty {
    display: none;

    &.active {
      display: block;
    }
  }

  .paging {
    margin: 20px;
    overflow: hidden;
    margin-left: 0px;
    text-align: center;
    font-size: 12px;
  }
`;
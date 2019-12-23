import styled from 'styled-components';
export const UserWrapper = styled.div`
  margin-top: 20px;

  .head-box {
    background: url('./static/imgs/user-head-bg.jpg') left top no-repeat;
    background-size: cover;

    .user-info {
      word-break: break-all;
      font-size: 1em;
      @media (max-width: 768px) {
        font-size: .8em;
      }
      .fa {
        width: 16px;
        text-align: right;
      }

      .label {
        color: #333;
        margin: 0 8px;
      }
    }
    .ant-card-meta {
      margin-top: 0;
    }
    
    .ant-card {
      background: rgba(255, 255, 255, 0.5);
    }
    .ant-card-body {
      padding: 20px;

      @media (max-width: 768px) {
        padding: 8px;
      }

      .ant-card-meta-title {
        margin-bottom: 0;
        @media (max-width: 768px) {
          font-size: 1em;
        }

        .fa {
          margin-right: 4px;
          width: 16px;
          text-align: right;
        }
      }
    }

    .change-avatar {
      float: left;

      .ant-upload-select-picture-card {
        position: relative;
        margin-bottom: 0;
        width: 100px;
        height: 100px;
        overflow: hidden;
        object-fit: contain;

        @media (max-width: 768px) {
          width: 80px!important;
          height: 80px!important;
          margin-right: 2px;
        }

        .ant-upload {
          padding: 3px;
        }

        .upload-icon {
          position: absolute;
          display: table-cell;
          vertical-align: middle;
          text-align: center;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #fff;
          background: rgba(0,0,.5);
          opacity: .5;
          filter:alpha(opacity=50);
        }

        .fa {
          margin-top: 22px;
        }
      }

      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .main-box {
    margin-top: 10px;

    & > .ant-tabs-card > .ant-tabs-content {
      margin-top: -16px;
    }

    & > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
      background: #fff;
      padding: 16px;
    }

    & > .ant-tabs-card > .ant-tabs-bar {
      border-color: #fff;
    }

    & > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
      border-color: transparent;
      background: transparent;
    }

    & > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
      border-color: #fff;
      background: #fff;
      color: #0090ce;
      border: 1px solid #0090ce;
      border-bottom: none;
      border-radius: 0;
    }

    .ant-timeline-item {

      .ant-collapse-header {
        padding-top: 1px;
        padding-bottom: 5px;

        @media (max-width: 768px) {
          font-size: .8em;
        }

        a {
          color: #555;
        }
      }
    }

    .ant-collapse-content-box {
      padding-left: 20px;
      padding-bottom: 10px;
    }

    .ant-timeline-item-tail {
      left: 6px;
    }

    .ant-list-vertical {
      
      .ant-list-item-meta, .ant-list-item-meta-title {
        margin-bottom: 0;

        a {
          @media (max-width: 768px) {
            font-size: .8em;
          }
        }
      }
    }
    
    .comment-list {
      a {
        font-size: .8em;
        color: #999;
      }

      li {
        list-style-type: circle;
      }
    }
    .ant-timeline-item-right {

      .ant-timeline-item-content {
        text-align: left!important;
      }
    }
  }
  .ant-tabs-tabpane {
    box-sizing: border-box;
  }
  .user-collect {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
    li {
      flex: 0 0 48.6%;
      margin-right: 2.4%;

      @media (max-width: 768px) {
        margin-right: 0;
      }

      &:nth-child(2n){
        margin-right: 0;
      }
    }
  }
  
  .upload-avatar {
    line-height: 80px;
  }

  .user-center {

    li {
      padding: 20px 0;
      border-bottom: 1px solid #f5f5f5;
      line-height: 2.3;
    }

    .left {
      float: left;
      width: 150px;
    }
    .right {
      float: left;
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

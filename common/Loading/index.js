import React from 'react';
import {
  LoadingWrapper
} from './style';

function Loading() {

  return (
    <LoadingWrapper>
      <div className="cssload-preloader">
        <div className="cssload-preloader-box">
            <div>手</div>
            <div>里</div>
            <div>有</div>
            <div>糖</div>
        </div>
      </div>
    </LoadingWrapper>
  )
}

export default Loading;
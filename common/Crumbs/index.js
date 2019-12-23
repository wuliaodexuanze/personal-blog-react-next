import React, {
  Fragment,
  memo
} from 'react'
import Link from 'next/link'
import {
  CrumbsWrapper
} from './style'

const Crumbs = memo(function Crumbs(props) {
  const { crumbs = [] } = props
  const crumbsLen = crumbs.length - 1
  return (
    <CrumbsWrapper>
        当前位置：
        {
          crumbs.map((item, index) => (
            crumbsLen === index
            ? <strong key={item.name}>{item.name}</strong>
            : (<Fragment key={index}>
                <Link href={item.path}><a>{item.name}</a></Link>
                <i className="fa fa-angle-right"></i>
              </Fragment>)
          ))
        }
    </CrumbsWrapper>
  )
});

export default Crumbs
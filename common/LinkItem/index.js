/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 21:48:10
 */
import React, {
  memo
} from 'react'
import {
  LinkItemWrapper
} from './style'

 const LinkItem = memo(function LinkItem({
   title = '',
   list = [],
   icon = 'align-justify'
 }) {

  return (
    <LinkItemWrapper>
      <h3 className="head" title={title}>
        <i className={`fa fa-${icon}`}></i>&nbsp;{title}
      </h3>
      <ul className="list">
        {
          list.map((item) => (
            <li key={`link_${item.id}`} className="item">
              <div className="item-list">
                <a href={item.path} target="black" title={item.name}>{item.name}</a>
              </div>
            </li>
          ))
        }
      </ul>
    </LinkItemWrapper>
  )
});

export default LinkItem
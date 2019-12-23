/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 21:48:10
 */
import React, {
  memo,
  useState,
  useEffect
} from 'react'
import Link from 'next/link'
import {
  TagItemWrapper
} from './style'

 const TagItem = memo(function TagItem({
   title = '',
   list = [],
   icon = 'align-justify'
 }) {

  return (
    <TagItemWrapper>
      <h3 className="head" title={title}>
        <i className={`fa fa-${icon}`}></i>&nbsp;{title}
      </h3>
      <ul className="list">
        {
          list.map((item) => (
            <li key={`tag_${item.id}`} className="item">
              <Link
                href={`/tags/${item.id}`}
                >
                  <div className="item-list">
                    <a title={item.name}>{item.name}</a>
                  </div>
                </Link>
            </li>
          ))
        }
      </ul>
    </TagItemWrapper>
  )
});

export default TagItem
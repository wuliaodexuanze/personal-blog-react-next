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
import moment from 'moment'
import {
  SideItemWrapper
} from './style'

 const SideItem = memo(function SideItem({
   title = '',
   list = [],
   icon = 'align-justify'
 }) {

  return (
    <SideItemWrapper>
      <h3 className="head" title={title}>
        <i className={`fa fa-${icon}`}></i>&nbsp;{title}
      </h3>
      
      <ul className="list">
        {
          list.map((item, index) => (
            <li key={`list_${item.id}`} className="item">
              <div className="sideshow">
                {
                  index === 0  && (
                    item.image ? (
                      <Link href={`/article/${item.id}`}>
                        <img
                          title="item.title"
                          src={item.image}
                          className="icon wp-post-image"
                          alt={item.title} />
                      </Link>
                    ) : null
                  )
                }
                <Link
                  href={`/article/${item.id}`}>
                  <a
                    className="title"
                    title={item.title}>{item.title}</a>
                </Link>
                <span className="datetime">
                  {moment(item.create_time).format('YYYY-MM-DD')}
                </span>
              </div>
            </li>
          ))
        }
      </ul>
  </SideItemWrapper>
  )
});

export default SideItem;
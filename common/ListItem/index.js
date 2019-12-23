/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 21:37:31
 */
import React, {
  memo
} from 'react'
import moment from 'moment'
import Link from 'next/link'
import {
  ListItemWrapper
} from './style'

const ListItem = memo(function ListItem({
  id,
  title = '',
  desc = '',
  image = '',
  create_time = 0,
  classify = [],
  user=[],
  fav_nums = 0,
  comment_nums = 0
}) {
  return (
    <ListItemWrapper>
      <h2 className="title">
        {
          classify ? (
            <span className="category">
              <Link
               href = {
                {
                  pathname: classify.path,
                  query: {
                    type: id
                  }
                }
              }>
                <a
                  title={classify.name}
                  rel = "category tag">{ classify.name || null }</a>
              </Link>
              <i className="fa fa-caret-right"></i>
            </span>
          ) : null
        }
      <Link
        href={`/article/${id}`}>
        <a
          className="text"
          title={title}>{title}</a>
      </Link>
      </h2>
      <div className="clearfix">
        {
          image ? (
            <div className="viewimg">
              <Link
                href={`/article/${id}`}
                >
                <a
                  title={title}
                  className="ipic">
                  <img src={image} alt="略缩图" className="thumbnail" />
                  <span className="shine">&nbsp;</span>
                </a>
              </Link>
            </div>
          ) : null
        }
        <div className="preview">
          {
            desc
          }
        </div>
        <div className="preem">
          <span className="item" title="作者">
            <i className="fa fa-user"></i>
            <Link href='/about'>
              <a>
                {
                  user && user.username
                }
              </a>
            </Link>
          </span>
          <span className="item" title="评论数">
            <i className="fa fa-comment"></i>
            <Link href="/article/1">
              <a className="ds-thread-count">
                {
                  comment_nums || '暂无评论'
                }
              </a>
            </Link>
          </span>
          <span className="item" title="点赞数">
            <i className="fa fa-star"></i>{fav_nums}
          </span>
          <span className="item" title="发布时间">
            <i className="fa fa-clock-o"></i>
            {moment(create_time).format('YYYY-MM-DD')}
          </span>
          <Link href={`/article/${id}`}>
            <a
              className="more"
              title={title}>阅读详情</a>
          </Link>
        </div>
      </div>
    </ListItemWrapper>
  )
});

export default ListItem;
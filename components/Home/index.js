/*
 * @Description: 描述
 * @Author: jayafs
 * @Email: 1169655050@qq.com
 * @Date: 2019-11-21 19:48:42
 * @LastEditors: jayafs
 * @LastEditTime: 2019-11-21 23:39:15
 */
import React, {
  useMemo,
} from 'react'
import Link from 'next/link'
import {
  isArray,
  size
} from 'lodash'
import {
  Carousel,
  Empty
} from 'antd'
import ListItem from '../../common/ListItem'
import Paging from '../../common/Paging'
import {
  HomeWrapper,
  CarouselWrapper
} from './style'


function Home({
  topList = [],
  blogsData = {},
  getBlogList
}) {

  const {
    rows:  blogList = [],
    count,
    limit,
    offset
  } = blogsData || {}
  const toplist = useMemo(() => topList, [topList])
  const bloglist = useMemo(() => blogList, [blogList])

  const changePage = (page) => {
    getBlogList({offset: (Number(page) - 1)*limit, limit})
  }

  return (
    <HomeWrapper>
      <CarouselWrapper>
          <ul className="slide-box" >
            {
              isArray(toplist) && size(toplist) > 0 ? (
                <Carousel autoplay>
                {
                  toplist.map(item => (
                    <li className="item" key={`top_${item.id}`}>
                      <Link href={`/article?id=${item.id}`} as={`/article/${item.id}`}>
                        <img alt={item.title} src={item.image} />
                      </Link>
                      <div className="title">
                        <Link href={`/article?id=${item.id}`} as={`/article/${item.id}`}>
                          <a>
                            {item.title}
                          </a>
                        </Link>
                      </div>
                    </li>
                  ))
                }
                </Carousel>
              ): null
            }
          </ul>
      </CarouselWrapper>
      <div className="list-box">
        {
          !isArray(toplist) && size(toplist) === 0 ? <Empty description="暂无数据" /> : (
            <>
              {
                bloglist.map(item => (
                  <ListItem key={`list_${item.id}`} {...item} />)
                )
              }
              <div className="paging">
                <Paging
                  total={count}
                  current={Number(offset) / limit + 1}
                  defaultPageSize={limit}
                  changePage={changePage} / >
              </div>
            </>
          )
        }
      </div>
    </HomeWrapper>
  )
}

export default Home
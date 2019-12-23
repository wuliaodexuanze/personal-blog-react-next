import React, {
  useMemo
} from 'react'
import { withRouter } from 'next/router'
import {
  size,
  filter,
  isArray
} from 'lodash'
import {
  Empty
} from 'antd'
import Crumbs from '../Crumbs'
import ListItem from '../ListItem'
import Paging from '../Paging'
import {
  ContentListWrapper
} from './style'

function ContentList({
  navs = [],
  listData = {},
  getList,
  router
}) {

  const path = router.query.type

  const {
    rows: list,
    count,
    limit,
    offset
  } = listData || {}

  const nav = filter(navs, {
    path
  })[0] || {}

  const crumbsData = useMemo(() => (
    [{
        name: '主页',
        path: '/'
      },
      nav
    ]
  ), [nav])


  const changePage = (page) => {
    getList(path, {offset: (Number(page) - 1)*limit, limit})
  }

  return (
    <ContentListWrapper>
      <div className="map">
        <Crumbs crumbs={crumbsData} />
        <h2 className="tit">文章分类: <span>{nav && nav.name}</span></h2>
      </div>
      {
        isArray(list) && size(list) > 0 ? (
          list.map(item => (<ListItem key={`list_${item.id}`} {...item} />))
        ) : <Empty description="暂无数据" />
      }
      <div className="paging">
        <Paging
          total={count}
          current={Number(offset) / limit + 1}
          defaultPageSize={limit}
          changePage={changePage} / >
      </div>
    </ContentListWrapper>
  )
}

export default withRouter(ContentList)

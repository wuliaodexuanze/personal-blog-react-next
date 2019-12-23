import React from 'react'
import {
  isArray,
  size
} from 'lodash'
import Link from 'next/link'
import { withRouter } from 'next/router'
import {
  Empty
} from 'antd'
import Crumbs from '../../common/Crumbs'
import ListItem from '../../common/ListItem'
import Paging from '../../common/Paging'
import { TagsWrapper } from './style'

function Tags ({
  router,
  tags = [],
  content = {},
  getContentList
}) {

  const currentId = router.query.id
  const crumbsData = [{
		name: '主页',
		path: '/'
	}, {
	  name: '标签',
	  path: 'tags'
  }]
  const {
    rows: list,
    count,
    limit,
    offset
  } = content || {}

  const changePage = (page) => {
    getContentList(currentId, {offset: (Number(page) - 1)*limit, limit})
  }

  return (
    <TagsWrapper>
      <div className="top">
        <Crumbs crumbs={crumbsData} />
        {
          isArray(tags) && size(tags) > 0
          ? (
            <div className="tag-list">
              {
                tags.map((item) => (
                  <Link
                    href={`/tags/${item.id}`}
                    key={`tag_${item.id}`}
                    >
                      <a
                        className={item.id === Number(currentId) ? 'active': ''}
                        title={item.name}>
                        {item.name}
                        </a>
                    </Link>
                ))
              }
            </div>
          ) : null
        }
      </div>
      
      <div className="content-list">
        {
          !isArray(list) || size(list) === 0 ? <Empty description="暂无数据" /> : (
            <>
              {
                list.map(item => (<ListItem key={`list_${item.id}`} {...item} />))
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
    </TagsWrapper>
  )
}

export default withRouter(Tags)
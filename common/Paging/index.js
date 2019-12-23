import React from 'react'
import {Pagination} from 'antd'
import {
  PagingWrapper
} from './style'

function Paging({
  total,
  current,
  defaultPageSize,
  changePage
}) {

  const onChange = (page, pageSize) => {
    changePage(page, pageSize)
  }

  return (
    <PagingWrapper>
      {
        total > 0 ? (
          <Pagination
            current={current}
            total={total}
            defaultPageSize={defaultPageSize}
            size="small"
            onChange={onChange} />
        ) : null
      }
    </PagingWrapper>
  )
}

export default Paging

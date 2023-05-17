import { Pagination } from 'antd'
import React, { FC, memo, useEffect, useState } from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

interface Props {
  total: number
}

const PageList: FC<Props> = memo(props => {
  const { total } = props
  const [searchParams] = useSearchParams()
  const nav = useNavigate()
  const { pathname } = useLocation()
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  useEffect(() => {
    const page = Number(searchParams.get('page')) || 1
    const pageSize = Number(searchParams.get('pageSize')) || 10
    setPage(page)
    setPageSize(pageSize)
  }, [searchParams])
  const handlePage = (page: number, pageSize: number) => {
    searchParams.set('page', String(page))
    searchParams.set('pageSize', String(pageSize))
    nav({
      pathname,
      search: searchParams.toString(),
    })
  }
  return (
    <Pagination
      style={{ marginTop: '10px', textAlign: 'end' }}
      onChange={handlePage}
      defaultCurrent={1}
      current={page}
      pageSize={pageSize}
      total={total}
    />
  )
})

export default PageList

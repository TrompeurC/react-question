import React, { memo, useEffect, useState } from 'react'
import { Input } from 'antd'
import { useNavigate, useSearchParams, useLocation } from 'react-router-dom'

const { Search } = Input

const ListSearch = memo(() => {
  const naviagte = useNavigate()
  const [usp] = useSearchParams()
  const { pathname } = useLocation()
  const [searchValue, setSearchValue] = useState<string>('')
  const onSearch = (value: string) => {
    naviagte(
      {
        pathname,
        search: `keyword=${value}`,
      },
      {
        replace: true,
      }
    )
  }
  useEffect(() => {
    const searchValue = usp.get('keyword') as string
    setSearchValue(searchValue || '')
  }, [])
  return (
    <Search
      placeholder="输入关键字搜索"
      value={searchValue}
      onChange={e => setSearchValue(e.target.value)}
      allowClear
      style={{ width: '200px' }}
      onSearch={onSearch}
    />
  )
})

export default ListSearch

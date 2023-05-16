import { useRequest, useTitle } from 'ahooks'
import { Spin } from 'antd'
import React, { FC, memo, useState } from 'react'
import ListSearch from '../../../components/list-search'
import QuestionCard from '../../../components/question-card'
import useQuestionListData from '../../../hooks/useQuestionListData'
import styles from '../common-styles/list-star.module.scss'

const List: FC = memo(() => {
  // const [questionList, setQuestionList] = useState([])
  // const [total, setTotal] = useState(0)

  const { data, loading } = useQuestionListData()
  const { list = [], total = 0 } = data
  // setQuestionList(list)
  // setTotal(total)

  useTitle('问卷 - 我的问卷')
  return (
    <div className={styles.questions}>
      <header className={styles.header}>
        <h3 className="title">我的问卷</h3>
        <div className="search">
          <ListSearch />
        </div>
      </header>
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <Spin />
        </div>
      ) : (
        <div className={styles.list}>
          {!loading &&
            list.map((item: any) => {
              return <QuestionCard key={item._id} {...item}></QuestionCard>
            })}
        </div>
      )}
      <div className="footer">加载更多</div>
    </div>
  )
})

export default List

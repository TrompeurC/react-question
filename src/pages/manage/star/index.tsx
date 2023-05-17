import { useTitle } from 'ahooks'
import React, { FC, memo, useState } from 'react'
import { Empty, Spin } from 'antd'
import QuestionCard from '../../../components/question-card'
import styles from '../common-styles/list-star.module.scss'
import ListSearch from '../../../components/list-search'
import useQuestionListData from '../../../hooks/useQuestionListData'
import PageList from '../../../components/page-list'

const Star: FC = memo(() => {
  // const [questionList, setQuestionList] = useState(rawList)
  const { data, loading } = useQuestionListData({ isStar: true })
  const { list = [], total } = data
  useTitle('问卷 - 星标问卷')
  return (
    <div className={styles.questions}>
      <header className={styles.header}>
        <h3 className="title">星标问卷</h3>
        <div className="search">
          <ListSearch />
        </div>
      </header>
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <Spin />
        </div>
      ) : (
        <>
          <div className={styles.list}>
            {!list.length ? (
              <Empty />
            ) : (
              list.map((item: any) => {
                return <QuestionCard key={item._id} {...item}></QuestionCard>
              })
            )}
          </div>
          <PageList total={total} />
        </>
      )}

      {/* <div className="footer">加载更多</div> */}
    </div>
  )
})

export default Star

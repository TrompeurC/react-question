import { useTitle } from 'ahooks'
import React, { FC, memo, useState } from 'react'
import ListSearch from '../../../components/list-search'
import QuestionCard from '../../../components/question-card'
import styles from '../common-styles/list-star.module.scss'

const rawList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '3月10日 13:23',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: true,
    answerCount: 4,
    createdAt: '3月10日 13:23',
  },
]

const List: FC = memo(() => {
  const [questionList, setQuestionList] = useState(rawList)
  useTitle('问卷 - 我的问卷')
  return (
    <div className={styles.questions}>
      <header className={styles.header}>
        <h3 className="title">我的问卷</h3>
        <div className="search">
          <ListSearch />
        </div>
      </header>
      <div className={styles.list}>
        {questionList.map(item => {
          return <QuestionCard key={item._id} {...item}></QuestionCard>
        })}
      </div>
      <div className="footer">加载更多</div>
    </div>
  )
})

export default List

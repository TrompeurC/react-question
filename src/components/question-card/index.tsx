import React, { FC, memo, ReactElement } from 'react'
import styles from './index.module.scss'

type PropsType = {
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
  children?: ReactElement
}

const QuestionCard: FC<PropsType> = memo(props => {
  const { title, isStar, isPublished, answerCount, createdAt } = props
  console.log(isStar, isPublished)
  return (
    <div className={styles['question-item']}>
      <div className={styles.first}>
        <span className={styles.title}>{title}</span>
        <span className={styles.infos}>
          <span className="publish">未发布</span>
          <span>答卷:{answerCount}</span>
          <span>{createdAt}</span>
        </span>
      </div>
      <div className={styles.line}></div>
      <div className={styles.last}>
        <span className={styles['last-left']}>
          <span className="edit">编辑问卷</span>
          <span className="census">数据统计</span>
        </span>
        <span className={styles['last-right']}>
          <span>标星</span>
          <span>复制</span>
          <span>删除</span>
        </span>
      </div>
    </div>
  )
})

export default QuestionCard

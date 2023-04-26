import React, { FC, memo, ReactElement } from 'react'
import { Button, Divider, Tag, Card, Space, message, Popconfirm, Modal } from 'antd'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
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
  const { _id, title, isStar, isPublished, answerCount, createdAt } = props
  const navigate = useNavigate()
  const [modal, contextHolder] = Modal.useModal()

  const onRemove = () => {
    modal.confirm({
      title: '确定要删除问卷吗？',
      icon: <ExclamationCircleOutlined />,
      okText: '确认',
      cancelText: '取消',
      onOk() {
        message.success('删除成功！')
      },
    })
  }
  const onCopy = () => {
    message.success('复制成功！')
  }
  return (
    <Card className={styles['question-item']}>
      <div className={styles.first}>
        <Link to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}>
          <Space>
            {isStar && <StarOutlined />}
            {title}
          </Space>
        </Link>
        <Space>
          {isPublished ? <Tag color={'processing'}>已发布</Tag> : <Tag>未发布</Tag>}

          <span>答卷:{answerCount}</span>
          <span>{createdAt}</span>
        </Space>
      </div>
      <Divider style={{ margin: '12px 0' }} />
      <div className={styles.last}>
        <span>
          <Button
            type="text"
            onClick={() => navigate(`/question/edit/${_id}`)}
            size="small"
            icon={<EditOutlined />}
            className="edit"
          >
            编辑问卷
          </Button>
          <Button
            disabled={!isPublished}
            onClick={() => navigate(`/question/stat/${_id}`)}
            type="text"
            className="census"
            icon={<LineChartOutlined />}
          >
            数据统计
          </Button>
        </span>
        <span>
          <Button
            type="text"
            icon={<StarOutlined style={{ color: isStar ? '#3399CC' : '' }} />}
            size="small"
          >
            标星
          </Button>
          <Popconfirm title="确定复制吗？" onConfirm={onCopy}>
            <Button type="text" icon={<CopyOutlined />} size="small">
              复制
            </Button>
          </Popconfirm>
          <Button type="text" icon={<DeleteOutlined />} size="small" onClick={onRemove}>
            删除
          </Button>
          {contextHolder}
        </span>
      </div>
    </Card>
  )
})

export default QuestionCard

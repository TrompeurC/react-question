import { useTitle } from 'ahooks'
import React, { FC, memo, useState } from 'react'
import { Empty, Table, Tag, Button, Space, Modal, message, Spin } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import styles from '../common-styles/list-star.module.scss'
import ListSearch from '../../../components/list-search'
import useQuestionListData from '../../../hooks/useQuestionListData'

const { confirm } = Modal

const Trash: FC = memo(() => {
  const { data, loading } = useQuestionListData({ isDelete: true })
  const { list = [], total } = data
  const [selectKeys, setSelectKeys] = useState<string[]>([])
  useTitle('问卷 - 回收站')

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render(isPublished: boolean) {
        return isPublished ? <Tag color={'processing'}>已发布</Tag> : <Tag>未发布</Tag>
      },
    },
    {
      title: '答案',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
  ]

  const onRemove = () => {
    confirm({
      title: '确定彻底删除吗？',
      icon: <ExclamationCircleOutlined />,
      onOk() {
        message.success('删除成功！')
      },
    })
  }
  const onRestore = () => {
    message.success('恢复成功！')
  }
  return (
    <div className={styles.questions}>
      <header className={styles.header}>
        <h3 className="title">回收站</h3>
      </header>
      {
        <div className={styles.list}>
          {!loading && !list.length ? (
            <Empty />
          ) : (
            <div>
              <div className={styles.search}>
                <Space>
                  <Button type="primary" disabled={!selectKeys.length} onClick={onRestore}>
                    恢复
                  </Button>
                  <Button disabled={!selectKeys.length} danger onClick={onRemove}>
                    删除
                  </Button>
                </Space>
                <span>
                  <ListSearch />
                </span>
              </div>
              {loading ? (
                <div style={{ textAlign: 'center' }}>
                  <Spin />
                </div>
              ) : (
                <Table
                  style={{ marginTop: '20px' }}
                  dataSource={list}
                  columns={columns}
                  rowKey={q => q._id}
                  pagination={false}
                  rowSelection={{
                    onChange: (selectedRowKeys: React.Key[]) => {
                      setSelectKeys(selectedRowKeys as string[])
                    },
                  }}
                ></Table>
              )}
            </div>
          )}
        </div>
      }
      {/* <div className="footer">加载更多</div> */}
    </div>
  )
})

export default Trash

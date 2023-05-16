import request from './request'
import type { ResDataType } from './request'

type SearchOptions = {
  keyword: string
  isPublished: boolean
  isStar: boolean
  isDelete: boolean
  page: number
  pageSize: number
}

export async function getQuestionById(id: string): Promise<ResDataType> {
  const url = `/question/${id}`
  const data = (await request.get(url)) as ResDataType

  return data
}

export async function createQuestion(): Promise<ResDataType> {
  const url = '/question'
  const data = (await request.post(url)) as ResDataType
  return data
}

export async function getQuestionList(opts: Partial<SearchOptions>): Promise<ResDataType> {
  const url = `/question`
  const data = (await request.get(url, { params: opts })) as ResDataType

  return data
}

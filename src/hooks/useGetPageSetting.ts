import { useAppSelector } from '../store'

export default function useGetPageSetting() {
  const pageInfo = useAppSelector(state => state.pageInfo)

  return pageInfo
}

/** 暂存区清理 **/
import { confirmMessage, errorMessage, successMessage } from '#/utils'

export const usePageEffect = options => {
  // 清空暂存区
  const clearHandle = (method, row, val) => {
    if (val.multipleSelection.length === 0) {
      errorMessage('请选择需要清空暂存区的数据')
      return false
    }
    confirmMessage({
      content: '是否确定清空暂存区？',
      confirmCallback: () => {
        const params = {
          osh_hdr_id: val.multipleSelection
            .filter(item => item.osh_hdr_id)
            .map(item => item.osh_hdr_id)
            .join(',')
        }
        val.fetchMethod(method, params).then(res => {
          successMessage('清空暂存区成功')
          val.handleSearchHdrData()
        })
      }
    })
  }

  return { clearHandle }
}

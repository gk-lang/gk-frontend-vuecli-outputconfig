/** 消息发送记录 */
import { errorMessage } from '#/utils'

export const usePageEffect = options => {
  const goDetail = (method, row) => {
    if (!row.message_jump_link) {
      errorMessage('消息链接为空')
      return false
    }
    window.open(row.message_jump_link || '/')
  }

  return { goDetail }
}

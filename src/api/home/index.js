import { service } from '#/http'

/** 能效 */
export const queryEnergy = data => {
  return service({
    url: 'instorage/home/queryEnergy',
    method: 'post',
    data: data
  })
}

/** 入库运营 */
export const queryInstorageOperate = data => {
  return service({
    url: 'instorage/home/instorageOperate',
    method: 'post',
    data: data
  })
}

/** 当日库存 */
export const queryStock = data => {
  return service({
    url: 'instorage/home/stock',
    method: 'post',
    data: data
  })
}

/** 资源情况 */
export const queryLocation = data => {
  return service({
    url: 'instorage/home/location',
    method: 'post',
    data: data
  })
}

/** 我的待办 */
export const queryMyWait = params => {
  return service({
    url: 'bpm/bpm/tasks/todo/list',
    method: 'get',
    params: params
  })
}

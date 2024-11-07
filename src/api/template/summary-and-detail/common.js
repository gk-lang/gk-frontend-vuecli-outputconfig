import { Table } from '#/effects/table'
import { getType } from '#/utils'

export default class Page extends Table {
  // 汇总查询
  handleSearchHdrData(method, row, val) {
    return new Promise((resolve, reject) => {
      this.handleSearchData(method, row, val).then(async res => {
        if (this.tableData.length > 0) {
          this.currentRow = this.tableData[0]
          this.jztGlobalTable?.tableElement?.setCurrentRow(this.tableData[0])
          await this.options.baseObject.detailTable.handleSearchData()
        } else {
          this.currentRow = {}
          this.options.baseObject.detailTable.tableData = []
        }
        resolve()
      })
    })
  }

  // 删除汇总
  deleteHdrData(method, row, val) {
    val
      .deleteData(method, row, val, true)
      .then(async () => {
        await val.handleSearchHdrData()
        // 关闭loading状态
        setTimeout(() => {
          method.loading = false
          val.globalTableLoading = false
        })
        // end
      })
      .catch(e => {
        // 关闭loading状态
        setTimeout(() => {
          method.loading = false
          val.globalTableLoading = false
        })
        // end
      })
  }

  // 保存汇总
  saveHdrData(method, row, val) {
    val
      .saveData(method, row, val, true)
      .then(async () => {
        await val.handleSearchHdrData()
        // 关闭loading状态
        setTimeout(() => {
          method.loading = false
          val.globalTableLoading = false
        })
        // end
      })
      .catch(e => {
        // 关闭loading状态
        setTimeout(() => {
          method.loading = false
          val.globalTableLoading = false
        })
        // end
      })
  }

  // 新增汇总
  addHdrData(method, row, val, callback) {
    val.addData(method, row, val, callback)
    this.options.baseObject.detailTable.tableData = []
  }

  // 新增
  addDetailData(method, row, val, callback) {
    const obj = {}
    // 根据输出方案设置行默认数据
    val.setRowDefaultByOutputConfig(obj)
    // 根据关联对象设置行数据
    if (
      this.options.relativeObj &&
      Object.keys(this.options.relativeObj.currentRow).length > 0
    ) {
      for (const field in obj) {
        if (typeof this.options.relativeObj.currentRow[field] !== 'undefined') {
          // 有传需要关联的key，数组类型
          if (this.options.relativeObjKeyByAdd) {
            if (this.options.relativeObjKeyByAdd.includes(field)) {
              obj[field] = this.options.relativeObj.currentRow[field]
            }
          } else {
            obj[field] = this.options.relativeObj.currentRow[field]
          }
        }
      }
    }
    // 函数
    if (callback && getType(callback) === 'function') {
      callback(obj)
    }
    obj.isEdit = true
    obj.ope_type = 'insert'
    // 新增数据
    this.tableData = [obj, ...this.tableData]
    this.currentRow = this.tableData[0]
  }

  // 审核通过
  auditHdrDataByProcess(method, row, val) {
    val
      .auditDataByProcess(method, null, true)
      .then(async () => {
        await val.handleSearchHdrData()
        // 关闭loading状态
        setTimeout(() => {
          method.loading = false
          val.globalTableLoading = false
        })
        // end
      })
      .catch(e => {
        // 关闭loading状态
        setTimeout(() => {
          method.loading = false
          val.globalTableLoading = false
        })
        // end
      })
  }

  // 驳回
  rejectHdrDataByProcess(method, row, val) {
    val
      .rejectDataByProcess(method, null, true)
      .then(async () => {
        await val.handleSearchHdrData()
        // 关闭loading状态
        setTimeout(() => {
          method.loading = false
          val.globalTableLoading = false
        })
        // end
      })
      .catch(e => {
        // 关闭loading状态
        setTimeout(() => {
          method.loading = false
          val.globalTableLoading = false
        })
        // end
      })
  }
}

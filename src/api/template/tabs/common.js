import { Table } from '#/effects/table'
import { successMessage, getPrefixFields, formLoading } from '#/utils'

export default class Page extends Table {
  constructor(options) {
    super(options)
    this.jzgGlobalForm = null
    this.activeName = options.activeName?.value
  }

  // 汇总查询
  handleSearchHdrData(method, row, val) {
    return new Promise((resolve, reject) => {
      this.handleSearchData(method, row, val).then(async res => {
        if (this.tableData.length > 0) {
          this.currentRow = this.tableData[0]
          this.jztGlobalTable?.tableElement?.setCurrentRow(this.tableData[0])
          await this.options.baseObject[
            `${this.options.tab.name}detailTable`
          ].handleSearchData()
        } else {
          this.currentRow = {}
          this.options.baseObject[
            `${this.options.tab.name}detailTable`
          ].tableData = []
        }
        resolve()
      })
    })
  }

  // 表单新增
  addFormData() {
    this.jzgGlobalForm.formElement?.clearValidate()
    this.jzgGlobalForm?.formItems?.forEach(item => {
      this.jzgGlobalForm.form[item.prop] = item.default
    })
  }

  // 设置表单保存参数，flag主要用于控制要不要设置跟选择框字段前缀相同的后缀为id、no、name字段
  setSaveFormParams(item, flag) {
    const params = item
      ? JSON.parse(JSON.stringify(item))
      : JSON.parse(JSON.stringify(this.jzgGlobalForm.form))
    // 设置全部
    this.jzgGlobalForm.formItems.forEach(s => {
      if (s.allSelectAppend) {
        if (params[`${s.prop}_all_select`]) {
          let arr = []
          if (s.privateProps.alias && s.privateProps.alias.length > 0) {
            arr = s.privateProps.alias.map(alias => alias.key)
          } else {
            arr = getPrefixFields(s.prop)
          }
          for (const key in params) {
            if (arr.indexOf(key) !== -1) {
              params[key] = '%'
            }
          }
        }
        Reflect.deleteProperty(params, `${s.prop}_all_select`)
      }
    })
    // end
    return params
  }

  // 获取保存表单参数
  getSaveFormParams() {
    const arr = [this.jzgGlobalForm.form].map(item => {
      item.staff_id = this.currentUser.user_id || ''
      item.staff_no = this.currentUser.user_no || ''
      item.staff_name = this.currentUser.nick_name || ''
      item.tenant_id = this.currentUser.select_tenant_id || ''
      item.tenant_name = this.currentUser.select_tenant_name || ''
      if (typeof item.warehouse_id === 'undefined') {
        item.warehouse_id = this.currentUser.select_warehouse_id || ''
        item.warehouse_no = this.currentUser.select_warehouse_no || ''
        item.warehouse_name = this.currentUser.select_warehouse_name || ''
      }
      return this.setSaveFormParams(item)
    })
    return arr
  }

  // 保存表单
  saveFormData(method, row, val) {
    return new Promise((resolve, reject) => {
      this.jzgGlobalForm.formElement?.validate(valid => {
        if (valid) {
          const arr = this.getSaveFormParams()
          method.loading = true
          const loadinginstance = formLoading()
          val
            .fetchMethod(method, arr)
            .then(async res => {
              successMessage('保存成功')
              this.addFormData()
              // 关闭loading状态
              setTimeout(() => {
                method.loading = false
                loadinginstance.close()
              })
              // end
              resolve()
            })
            .catch(e => {
              // 关闭loading状态
              setTimeout(() => {
                method.loading = false
                loadinginstance.close()
              })
              // end
            })
        }
      })
    })
  }
}

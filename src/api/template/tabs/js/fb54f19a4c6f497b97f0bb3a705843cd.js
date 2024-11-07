import { watchEffect, nextTick } from 'vue'
/** 货主商品资料查询 */
export const usePageEffect = options => {
  // 2024.1.18 增加此监听，主要是为了快捷键的问题，formActiveName不清空的话，从第二个tab页回到其他tab页，其他tab页的快捷键就不生效了，主要是jzt-global-base里面的监听，用到了formActiveName进行匹配
  watchEffect(() => {
    if (options.activeName.value !== 'second') {
      options.formActiveName.value = ''
    }
  })
  const editFormData = (method, row, val) => {
    const params = {
      owner_goods_id: row.owner_goods_id
    }
    method.loading = true
    val.globalTableLoading = true
    val
      .fetchMethod(method, params)
      .then(res => {
        options.activeName.value = 'second'
        options.formActiveName.value = 'formFirst'
        nextTick(() => {
          // 主信息
          for (const key in options.baseObject.value.secondformFirstsummaryTable
            .jzgGlobalForm.form) {
            if (typeof res.data.mdbGoodsOwner[key] !== 'undefined') {
              options.baseObject.value.secondformFirstsummaryTable.jzgGlobalForm.form[
                key
              ] = res.data.mdbGoodsOwner[key]
            }
          }
          // 业务信息
          for (const key in options.baseObject.value
            .secondformSecondsummaryTable.jzgGlobalForm.form) {
            if (typeof res.data.mdbGoodsOwnerBusiness[key] !== 'undefined') {
              options.baseObject.value.secondformSecondsummaryTable.jzgGlobalForm.form[
                key
              ] = res.data.mdbGoodsOwnerBusiness[key]
            }
          }
          // 物流属性
          for (const key in options.baseObject.value.secondformThirdsummaryTable
            .jzgGlobalForm.form) {
            if (typeof res.data.mdbGoodsOwnerLogistics[key] !== 'undefined') {
              options.baseObject.value.secondformThirdsummaryTable.jzgGlobalForm.form[
                key
              ] = res.data.mdbGoodsOwnerLogistics[key]
            }
          }
          // 质量属性
          for (const key in options.baseObject.value
            .secondformFourthsummaryTable.jzgGlobalForm.form) {
            if (typeof res.data.mdbGoodsOwnerQuality[key] !== 'undefined') {
              options.baseObject.value.secondformFourthsummaryTable.jzgGlobalForm.form[
                key
              ] = res.data.mdbGoodsOwnerQuality[key]
            }
          }
          // 证照
          options.baseObject.value.secondformFivesummaryTable.tableData =
            res.data.mdbGoodsLicense || []
          // 关闭loading状态
          setTimeout(() => {
            method.loading = false
            val.globalTableLoading = false
          })
          // end
        })
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
  return { editFormData }
}

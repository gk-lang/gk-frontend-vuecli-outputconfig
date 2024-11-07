import { service } from '#/http'
import application from '@/config/application'
import { getUserCookie } from '#/utils'

/**
 * 登录
 * @param {*} data 入参
 * @returns
 */
export const login = data => {
  return service({
    url: 'admin/login/token',
    method: 'post',
    data,
    isFormData: true
  })
}

/**
 * 获取用户
 * @returns
 */
export const getUserInfo = () => {
  return service({
    url: 'auth/auth/getUserAccountInfo',
    method: 'post',
    data: {
      app_id: application.app_id,
      staff_id: getUserCookie()
    }
  })
}

/**
 * 通过用户名获取用户信息
 * @returns
 */
export const getUserInfoByUserName = userName => {
  return service({
    url: 'base/user/username/get',
    method: 'get',
    isFormData: true,
    params: {
      username: userName
    }
  })
}

/**
 * 获取对应仓库下的角色
 * @param {*} warehouseId 仓库id
 * @returns
 */
export const getStaffRoleByWarehouse = user => {
  return service({
    url: 'auth/auth/getStaffRoleByWarehouse',
    method: 'post',
    data: {
      app_id: application.app_id,
      warehouse_id: user.select_warehouse_id,
      tenant_id: user.select_tenant_id,
      staff_id: getUserCookie()
    }
  })
}

/**
 * 获取菜单
 * @returns
 */
export const getCurrentUserMenu = warehouseId => {
  const resp = service({
    url: 'auth/auth/getMenuTreeByStaff',
    method: 'post',
    data: {
      app_id: application.app_id,
      warehouse_id: warehouseId,
      menu_type: 'PC',
      staff_id: getUserCookie()
    }
  })
  // return resp
  // const resp = Promise.resolve({
  //   code: 200,
  //   data: [
  //     {
  //       menu_id: 'f8a2cf2daf7d4a55ae5573644b86724e',
  //       menu_no: 'AM0387',
  //       menu_name: '一级菜单',
  //       menu_type: 'PC',
  //       menu_level: '24',
  //       parent_id: '0',
  //       menu_icon: null,
  //       menu_url: '',
  //       doc_url: '',
  //       menu_config:
  //         '{"menu_icon":"icon-buhuoguanli","single_tenant":true,"single_warehouse":true,"condition_default_way":"global","show_condition":false,"developer":"","hidden":false}',
  //       is_active: '1',
  //       created_staff_id: '90',
  //       created_staff_name: '梅贤军',
  //       created_time: '1703266361000',
  //       updated_staff_id: '521677655146233856',
  //       updated_staff_name: '超级管理员',
  //       updated_time: '1706231787000',
  //       flag: null,
  //       changetype: null,
  //       children: [
  //         {
  //           menu_id: '1c9eabdbf3ef42aa9b6bc33921f0c659',
  //           menu_no: 'AM0388',
  //           menu_name: '二级菜单',
  //           menu_type: 'PC',
  //           menu_level: '1',
  //           parent_id: 'f8a2cf2daf7d4a55ae5573644b86724e',
  //           menu_icon: null,
  //           menu_url: 'demo',
  //           doc_url: '',
  //           menu_config:
  //             '{"menu_icon":"","single_tenant":true,"single_warehouse":true,"condition_default_way":"global","show_condition":false,"developer":"赵江雨，张恒，董武震，席元波","hidden":false}',
  //           is_active: '1',
  //           created_staff_id: '90',
  //           created_staff_name: '梅贤军',
  //           created_time: '1703266544000',
  //           updated_staff_id: '90',
  //           updated_staff_name: '梅贤军',
  //           updated_time: '1703777801000',
  //           flag: null,
  //           changetype: null,
  //           children: []
  //         }
  //       ]
  //     }
  //   ],
  //   message: null,
  //   timestamp: '1708926916818'
  // })
  return resp
}

/**
 * 获取用户角色
 * @param {*} data
 * @returns
 */
export const getUserRole = data => {
  return service({
    url: 'auth/auth/getUserRole',
    method: 'post',
    data
  })
}

/**
 * 退出登录
 * @param {*} token
 * @returns
 */
export const logout = token => {
  return service({
    url: 'admin/logout/token',
    method: 'post',
    data: { token: token },
    isFormData: true
  })
}

/**
 * 修改密码
 * @param {*} data
 * @returns
 */
export const updatePassword = data => {
  return service({
    url: 'admin/login/change',
    method: 'post',
    data: data,
    isFormData: true
  })
}

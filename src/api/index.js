import request from '@/utils/request'

// 
export function xxxxx(params) {
  return request({
    url: '',
    method: 'get',
    params,
  })
}

// 获取完整部门树
export const getDepartmentTree = (params) => {
  return request({
    url: '/department/tree',
    params: params,
    method: 'get',
  })
}

// 通过类型获取字典数据
export const getDictDataByType = (type, params) => {
  return request({
    url: '/dictData/getByType/'+type,
    params: params,
    method: 'get',
  })
}


import request from '@/utils/request'

// 保存日历事件
export function saveSchedule(data) {
  return request({
    url: '/schedule',
    method: 'post',
    data,
  })
}

//获取全部日历事件
export function getAllSchedule(params) {
  return request({
    url: '/schedule/myScheduleList',
    params: params,
    method: 'get',
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


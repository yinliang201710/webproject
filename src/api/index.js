import request from '../utils/request'
const logins = (op) => {
  const params = { ...op }
  return request({
    method: 'post',
    url: '/service/index',
    data: params
  })
}
export { logins }

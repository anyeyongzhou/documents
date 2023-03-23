import request from '@/utils/request'

//有这些方法可以调用
/* axios#request(config)
axios#get(url[, config])
axios#delete(url[, config])
axios#head(url[, config])
axios#post(url[, data[, config]])
axios#put(url[, data[, config]])
axios#patch(url[, data[, config]]) */

// GET
export const getArticleDetailAPI = (id) => {
  return request.get(`/v1_0/articles/${id}`)
}

//带参数的get
export const getArtListAPI = (id, time) => {
  return request.get('/v1_0/articles', {
    params: {
      channel_id: id,
      timestamp: time
    }
  })
}

// POST
export const loginAPI = (data) => {
  return request.post('/v1_0/authorizations', data)
}

//PATCH
export const updateUserProfileAPI = (obj) => {
  return request.patch('/v1_0/user/profile', obj)
}

// DELETE
export const unfollowUserAPI = (userId) => {
  return request.delete(`/v1_0/user/followings/${userId}`)
}

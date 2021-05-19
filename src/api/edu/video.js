import request from '@/utils/request'

export default {

    //1.添加小节
    addVideo(video) {
        return request({
          url: `/eduService/video/addVideo`,
          method: 'post',
          data:video
        })
    },

    //2.删除小节
    deleteVideo(id) {
      return request({
        url: `/eduService/video/${id}`,
        method: 'delete'
      })
   },

   //3.删除视频
    removeAlyVideo(id) {
    return request({
      url: `/eduvod/video/removeAlyVideo/${id}`,
      method: 'delete'
     })
   }

}
import request from '@/utils/request'

export default {

    //1.获取所有的章节和小节
    getAllChapterVideo(courseId) {
        return request({
          url: `/eduService/chapter/getChapterVideo/${courseId}`,
          method: 'get'
        })
    },

    //2.添加章节
    addChapter(chapter){
      return request({
        url: `/eduService/chapter/addChapter`,
        method: 'post',
        data:chapter
      })
    },

    //3.修改章节(根据id查询章节)
    getChapter(chapterId) {
      return request({
        url: `/eduService/chapter/getChapterInfo/${chapterId}`,
        method: 'get'
      })
    },

    //修改章节
    updateChapter(chapter){
      return request({
        url: `/eduService/chapter/updateChapter`,
        method: 'post',
        data:chapter
      })
    },

    //5.删除章节
    deleteChapter(chapterId){
      return request({
        url: `/eduService/chapter/${chapterId}`,
        method: 'delete'
      })
    }

}
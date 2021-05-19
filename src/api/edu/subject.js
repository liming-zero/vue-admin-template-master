import request from '@/utils/request'

export default {

    //1.获取所有一级二级课程分类
    getSubjectList() {
        return request({
          url: `/eduService/subject/getAllSubject`,
          method: 'get'
        })
    }

}
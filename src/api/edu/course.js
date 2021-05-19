import request from '@/utils/request'

export default {

    //1.添加课程信息
    addCourseInfo(courseInfo) {
        return request({
          url: `/eduService/course/addCourseInfo`,
          method: 'post',
          data:courseInfo
        })
    },

    //2.查询所有讲师
    getTeacherList(){
        return request({
            url: `/eduService/teacher/findAll`,
            method: 'get'
          })
    },

    //3.根据课程id查询课程基本信息
    getCourseInfo(courseId){
      return request({
        url: `/eduService/course/getCourseInfo/${courseId}`,
        method: 'get'
      })
    },

    //4.修改课程基本信息
    updateCourseInfo(courseInfo){
      return request({
        url: `/eduService/course/updateCourseInfo`,
        method: 'post',
        data:courseInfo
      })
    },

    //5.课程信息确认显示
    getPublishCourseInfo(courseId){
      return request({
        url: `/eduService/course/getPublishCourseInfo/${courseId}`,
        method: 'get'
      })
    },

    //5.课程最终发布，修改课程状态
    publishCourse(courseId){
      return request({
        url: `/eduService/course/publishCourse/${courseId}`,
        method: 'post'
      })
    },

    //6.查询所有课程列表
    getCourseList(){
      return request({
        url: `/eduService/course/getCourseList`,
        method: 'get'
      })
    },

    //7.删除课程列表中的课程
    deleteCourse(courseId){
      return request({
        url: `/eduService/course/${courseId}`,
        method: 'delete'
      })
    }


}
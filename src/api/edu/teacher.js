import request from '@/utils/request'

export default {

    //1.讲师列表，条件查询分页
    //current当前页、limit每页记录数、teacherQuery条件对象
    getTeacherPageList(current,limit,teacherQuery) {
        return request({
          url: `/eduService/teacher/pageTeacherCondition/${current}/${limit}`,
          method: 'post',
          //teacherQuery条件对象，后端使用的@RequestBody获取数据，前端需要加属性data:把对象转换成json
          data: teacherQuery
        })
    },

    //2.逻辑删除讲师
    deleteTeacherById(id){
      return request({
        url: `/eduService/teacher/${id}`,
        method: 'delete'
      })
    },

    //3.添加讲师
    addTeacher(teacher){
      return request({
        url: `/eduService/teacher/addTeacher`,
        method: 'post',
        data:teacher
      })
    },

    //4.根据id查询讲师
    getTeacherInfo(id){
      return request({
        url: `/eduService/teacher/getTeacher/${id}`,
        method: 'get'
      })
    },

    //5.修改讲师
    updateTeacherInfo(teacher){
      return request({
        url: `/eduService/teacher/updateTeacher`,
        method: 'post',
        data:teacher
      })
    }

}
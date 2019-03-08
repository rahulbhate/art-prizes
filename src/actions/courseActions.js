 import courseApi from '../api/mockCourseApi';
 export const createCourse = (course) =>{
     //debugger;
    return {
        type: "CREATE_COURSE",
        course
    }
}
export const loadCoursesSuccess = (courses) =>{
    //debugger;
   return {
       type: "LOAD_COURSES_SUCCEESS",
       courses
   }
}
export const loadCourses = () => {
    return function (dispatch){  
        return courseApi.getAllCourses().then( courses => {
            dispatch(loadCoursesSuccess(courses))
        }).catch(error => {
            throw(error);
        });
    }
}
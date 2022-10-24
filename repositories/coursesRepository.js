const { Courses } = require("../models");

class CoursesRepository {
  // ------------------------- Handle Get All Courses ------------------------- //

  static async handleGetAllCourses(){
    const handleGetAllCourses = await Courses.findAll();

    return handleGetAllCourses;
};

// ------------------------- End Handle Get All Courses ------------------------- //
 
// ------------------------- Get Course By  Course Name  ------------------------- //

    static async getCourseByCourseName({ course_name }) {
      const getCourseName = await Courses.findOne({
          where: {
              course_name: course_name
          }
      });

      return getCourseName;
    };

  // ------------------------- End Get Course By Course Name  ------------------------- //
  

  // ------------------------- End Handle Get Course By Id ------------------------- //

  static async handleGetCourseById({ id }){
      const handleGetCourseById = await Courses.findOne({
          where: { id }
      });

      return handleGetCourseById;
  }

  // ------------------------- End Handle Get Course By Id ------------------------- //

  // ------------------------- End Handle Get Course By User Id ------------------------- //

  static async handleGetCourseByUserId({ user_id }){
      const handleGetCourseByUserId = await Courses.findOne({
          where: { user_id }
      });

      return handleGetCourseByUserId;
  }

  // ------------------------- End Handle Get Course By User Id ------------------------- //



  // ------------------------- End Handle Get Course By Created At ------------------------- //

  static async handleGetCourseByCreatedAt({ createdAt }){
      const handleGetCourseByCreatedAt = await Courses.findOne({
          where: { createdAt }
      });

      return handleGetCourseByCreatedAt;
  }

  // ------------------------- End Handle Get Course By Created At ------------------------- //
  

  // ------------------------- Create course  ------------------------- //
  
  static async handleCreateCourse({ course_name, description, picture,course_status, user_id, category_id,sub_category_id}) {
      const handleCreateCourse = Courses.create({
          course_name,
          description,
          picture,
          course_status,
          user_id,
          category_id,
          sub_category_id,
      });

      return handleCreateCourse;
  };
  
  // ------------------------- End Create Course  ------------------------- //

  // ------------------------- Update Course  ------------------------- //
  
  static async handleUpdateCourses({ id, course_name, description, picture, user_id, category_id,sub_category_id }) {

      const updatedCourse = await Courses.update({
        course_name,
        description,
        picture,
        user_id,
        category_id,
        sub_category_id,
      }, {
          where: { id },
      });

      return updatedCourse;
      
  };

  // ------------------------- End Update Course  ------------------------- //

  // ------------------------- Handle Delete Courses ------------------------- //

  static async handleDeleteCourses({ id }) {
      
      const deletedCourses = await Courses.destroy({ where: { id } });

      return deletedCourses;
  }

  // ------------------------- End Handle Delete Courses ------------------------- //
}

module.exports = CoursesRepository;
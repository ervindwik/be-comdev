const coursesService = require("../services/coursesService");


// ------------------------- Handle Create Course ------------------------- //

const handleCreateCourse = async (req, res) => {
    const { course_name, description, picture,course_status, user_id, category_id,sub_category_id } = req.body;

    const { status, status_code, message, data} = await coursesService.handleCreateCourse({
        course_name,
        description,
        picture,
        course_status,
        user_id,
        category_id,
        sub_category_id
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};
// ------------------------- End handle Create Course ------------------------- //


// ------------------------- Handle Get All Courses ------------------------- //

const handleGetAllCourses = async (req, res) => {
    
    const { status, status_code, message, data} = await coursesService.handleGetAllCourses();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get All Courses ------------------------- //


// ------------------------- Handle Get Course By Id ------------------------- //

const handleGetCourseById = async (req, res) => {
    
    const { id } = req.params;

    const { status, status_code, message, data} = await coursesService.handleGetCourseById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get Course By Id ------------------------- //

// ------------------------- Handle Get Course By User Id ------------------------- //

const handleGetCourseByUserId = async (req, res) => {
    
    const { user_id } = req.params;

    const { status, status_code, message, data} = await coursesService.handleGetCourseByUserId({ user_id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get Course By User Id ------------------------- //


// ------------------------- Handle Get Course By CreatedAt ------------------------- //

const handleGetCourseByCreatedAt = async (req, res) => {
    
    const { createdAt } = req.params;

    const { status, status_code, message, data} = await coursesService.handleGetCourseByUserId({ createdAt });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get Course By CreatedAt ------------------------- //


// ------------------------- Handle Update Courses ------------------------- //

const handleUpdateCourseById = async (req, res, next) => {

    const { id } = req.params;
    const { course_name, description, category_id,sub_category_id} = req.body;

    const { status, status_code, message, data} = await coursesService.handleUpdateCourses({
        id,
        course_name,
        description,
        picture:req.file,
        category_id,
        sub_category_id
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};


// ------------------------- End Handle Update Courses ------------------------- //


// ------------------------- Handle Delete  Courses ------------------------- //

const handleDeleteCourseById = async (req, res, next) => {
    const { id } = req.params;

    const { status, status_code, message, data } = await coursesService.handleDeleteCourseById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}


// ------------------------- End Handle Delete Courses ------------------------- //

module.exports = { 
    handleCreateCourse,
    handleUpdateCourseById, 
    handleGetAllCourses, 
    handleGetCourseById, 
    handleGetCourseByUserId, 
    handleDeleteCourseById,
    handleGetCourseByCreatedAt
};


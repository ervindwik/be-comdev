const coursesRepository = require("../repositories/coursesRepository");

class CoursesService {
    // ------------------------- Handle Get All Courses ------------------------- //

    static async handleGetAllCourses() {

        const handleGetAllCourses = await coursesRepository.handleGetAllCourses();

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan semua data courses",
            data: {
                get_all_courses: handleGetAllCourses,
            },
        };
    };

    // ------------------------- End Handle Get All Courses ------------------------- //

    // ------------------------- Handle Create Course ------------------------- //

    static async handleCreateCourse({ course_name, description, course_status, picture, user_id, category_id,sub_category_id}) {

        // ------------------------- Payload Validation ------------------------- //

        if (!course_name) {
            return {
                status: false,
                status_code: 400,
                message: "Nama course wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        }
        if (!description) {
            return {
                status: false,
                status_code: 400,
                message: "Deskripsi course wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        }
        if (!picture) {
            return {
                status: false,
                status_code: 400,
                message: "Gambar course wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        }
        if (!category_id) {
            return {
                status: false,
                status_code: 400,
                message: "Category course wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        }
        if (!sub_category_id) {
            return {
                status: false,
                status_code: 400,
                message: "Jenis course wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        }

        const getCourseByCourseName = await coursesRepository.getCourseByCourseName({ course_name });

        if (getCourseByCourseName) {
            return {
                status: false,
                status_code: 400,
                message: "Nama Course sudah terdaftar!",
                data: {
                    registered_course: null,
                },
            };
        } else {
            const handleCreateCourse = await coursesRepository.handleCreateCourse({
                course_name,
                description,
                picture,
                course_status,
                user_id,
                category_id,
                sub_category_id
            });

            return {
                status: true,
                status_code: 201,
                message: "Berhasil mendaftarkan course!",
                data: {
                    registered_course: handleCreateCourse,
                },
            };
        }
    }

    // ------------------------- End Create Course ------------------------- //


    // ------------------------- Handle Get Course By Id ------------------------- //

    static async handleGetCourseById({ id }) {
        const handleGetCourseById = await coursesRepository.handleGetCourseById({ id });

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan data course berdasarkan id",
            data: {
                user_by_id: handleGetCourseById,
            },
        };
    };

    // ------------------------- End Handle Get Course By Id ------------------------- //


    // ------------------------- Handle Get Course By createdAt ------------------------- //

    static async handleGetCourseByCreatedAt({ createdAt }) {
        const handleGetCourseByCreatedAt = await coursesRepository.handleGetCourseByCreatedAt({ createdAt });

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan data course berdasarkan id",
            data: {
                user_by_id: handleGetCourseByCreatedAt,
            },
        };
    };

    // ------------------------- End Handle Get Course By createdAt ------------------------- //

    // ------------------------- Handle Get Course By Id ------------------------- //

    static async handleGetCourseByUserId({ user_id }) {
        const handleGetCourseByUserId = await coursesRepository.handleGetCourseByUserId({ user_id });

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan data course berdasarkan id",
            data: {
                user_by_id: handleGetCourseByUserId,
            },
        };
    };

    // ------------------------- End Handle Get Course By Id ------------------------- //


    // ------------------------- Handle Update Courses ------------------------- //

    static async handleUpdateCourses({ id, course_name, description, picture, category_id,sub_category_id }) {

        const getCourseById = await coursesRepository.handleGetCourseById({ id });

        if (getCourseById.id == id ) {
            const updatedCourse = await coursesRepository.handleUpdateCourses({
                id,
                course_name,
                description,
                picture,
                category_id,
                sub_category_id
            });
    
            return {
                status: true,
                status_code: 200,
                message: "Course berhasil di update",
                data: {
                    updated_course: updatedCourse,
                },
            };
        } else {
            return {
                status: false,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    updated_course: null,
                },
            };
        }
    };

    // ------------------------- End Handle Update Courses ------------------------- //


    // ------------------------- Handle Delete Courses ------------------------- //

    static async handleDeleteCourses({ id }) {

        const handleGetCourseById = await coursesRepository.handleGetCourseById({ id });

        if (handleGetCourseById.id == id) {

            const deletedCourses = await coursesRepository.handleDeleteCourses({ id });

            return {
                status: true,
                status_code: 200,
                message: "Course berhasil di hapus",
                data: {
                    deleted_courses: deletedCourses,
                },
            };
        } else {
            return {
                status: true,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    deleted_courses: null,
                },
            };
        }
    }

    // ------------------------- End Handle Delete Courses ------------------------- //


}

module.exports = CoursesService;
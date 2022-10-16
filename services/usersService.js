const usersRepository = require("../repositories/usersRepository");
const cloudinary = require("../cloudinary/cloudinary");
class UsersService {

    // ------------------------- Handle Get All Users ------------------------- //

    static async handleGetAllUsers() {

        const handleGetAllUsers = await usersRepository.handleGetAllUsers();

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan semua data users",
            data: {
                get_all_users: handleGetAllUsers,
            },
        };
    };

    // ------------------------- End Handle Get All Users ------------------------- //


    // ------------------------- Handle Get User By Id ------------------------- //

    static async handleGetUserById({ id }) {
        const handleGetUserById = await usersRepository.handleGetUserById({ id });

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan data user berdasarkan id",
            data: {
                user_by_id: handleGetUserById,
            },
        };
    };

    // ------------------------- End Handle Get User By Id ------------------------- //


    // ------------------------- Handle Update Users ------------------------- //

    static async handleUpdateUsers({ id, name, username, email, position, about, picture }) {

        const getUserById = await usersRepository.handleGetUserById({ id });

        if (getUserById.id == id ) {

            let pictures = "";

            if (picture) {
                const fileBase64 = picture.buffer.toString("base64");
                const file = `data:${picture.mimetype};base64,${fileBase64}`;
                const cloudinaryPicture = await cloudinary.uploader.upload(file);
                pictures = cloudinaryPicture.url;
            } else {
                pictures = getUserById.picture;
            }
            

            const updatedUser = await usersRepository.handleUpdateUsers({
                id,
                name,
                username,
                email,
                position,
                about,
                picture: pictures
            });
    
            return {
                status: true,
                status_code: 200,
                message: "User berhasil melengkapi info akun!",
                data: {
                    updated_user: updatedUser,
                },
            };
        } else {
            return {
                status: false,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    updated_user: null,
                },
            };
        }
    };

    // ------------------------- End Handle Update Users ------------------------- //



    // ------------------------- Handle Delete Users ------------------------- //

    static async handleDeleteUsers({ id }) {

        const handleGetUserById = await usersRepository.handleGetUserById({ id });

        if (handleGetUserById.id == id) {

            const deletedUsers = await usersRepository.handleDeleteUsers({ id });

            return {
                status: true,
                status_code: 200,
                message: "User berhasil di hapus",
                data: {
                    deleted_users: deletedUsers,
                },
            };
        } else {
            return {
                status: true,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    deleted_users: null,
                },
            };
        }
    }

    // ------------------------- End Handle Delete Users ------------------------- //



    // ------------------------- Handle Get Product By User Id ------------------------- //

    static async handleGetUserByRoleId({ id, role_id }) {
        try {
            const handleGetUserByRoleId = await usersRepository.handleUserByRoleId({ id, role_id });

            return {
                status: true,
                status_code: 200,
                message: "Success Get User By Role Id",
                data: {
                    user_role_id: handleGetUserByRoleId,
                },
            };
        } catch (err) {
            return {
                status: false,
                status_code: 500,
                message: err.message,
                data: {
                    user_role_id: null,
                },
            };
        };
    };

    // ------------------------- End Handle Get Product By User Id ------------------------- //

};

module.exports = UsersService;
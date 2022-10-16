const rolesRepository = require("../repositories/rolesRepository");

class RolesService {
    // ------------------------- Handle Get All Roles ------------------------- //

    static async handleGetAllRoles() {

        const handleGetAllRoles = await rolesRepository.handleGetAllRoles();

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan semua data roles",
            data: {
                get_all_roles: handleGetAllRoles,
            },
        };
    };

    // ------------------------- End Handle Get All Roles ------------------------- //


    // ------------------------- Handle Create Role ------------------------- //

    static async handleCreateRole({ role_name }) {

        // ------------------------- Payload Validation ------------------------- //

        if (!role_name) {
            return {
                status: false,
                status_code: 400,
                message: "Nama role wajib diisi!",
                data: {
                    registered_user: null,
                },
            };
        }

        const getRoleByRoleName = await rolesRepository.getRoleByRoleName({ role_name });

        if (getRoleByRoleName) {
            return {
                status: false,
                status_code: 400,
                message: "Nama Role sudah terdaftar!",
                data: {
                    registered_role: null,
                },
            };
        } else {
            const createdRole = await rolesRepository.createNewRole({
                role_name
            });

            return {
                status: true,
                status_code: 201,
                message: "Berhasil mendaftarkan role!",
                data: {
                    registered_role: createdRole,
                },
            };
        }
    }

    // ------------------------- End Create Role ------------------------- //


    // ------------------------- Handle Get Role By Id ------------------------- //

    static async handleGetRoleById({ id }) {
        const handleGetRoleById = await rolesRepository.handleGetRoleById({ id });

        return {
            status: true,
            status_code: 200,
            message: "Berhasil mendapatkan data role berdasarkan id",
            data: {
                user_by_id: handleGetRoleById,
            },
        };
    };

    // ------------------------- End Handle Get Role By Id ------------------------- //


    // ------------------------- Handle Update Roles ------------------------- //

    static async handleUpdateRoles({ id, role_name }) {

        const getRoleById = await rolesRepository.handleGetRoleById({ id });

        if (getRoleById.id == id ) {
            const updatedRole = await rolesRepository.handleUpdateRoles({
                id,
                role_name
            });
    
            return {
                status: true,
                status_code: 200,
                message: "Role berhasil di update",
                data: {
                    updated_role: updatedRole,
                },
            };
        } else {
            return {
                status: false,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    updated_role: null,
                },
            };
        }
    };

    // ------------------------- End Handle Update Roles ------------------------- //


    // ------------------------- Handle Delete Roles ------------------------- //

    static async handleDeleteRoles({ id }) {

        const handleGetRoleById = await rolesRepository.handleGetRoleById({ id });

        if (handleGetRoleById.id == id) {

            const deletedRoles = await rolesRepository.handleDeleteRoles({ id });

            return {
                status: true,
                status_code: 200,
                message: "Role berhasil di hapus",
                data: {
                    deleted_roles: deletedRoles,
                },
            };
        } else {
            return {
                status: true,
                status_code: 401,
                message: "Resource Unauthorized",
                data: {
                    deleted_roles: null,
                },
            };
        }
    }

    // ------------------------- End Handle Delete Roles ------------------------- //


}

module.exports = RolesService;
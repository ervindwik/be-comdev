const { Roles } = require("../models");

class RolesRepository {
    // ------------------------- Handle Get All Roles ------------------------- //

    static async handleGetAllRoles(){
        const handleGetAllRoles = await Roles.findAll();

        return handleGetAllRoles;
    };

    // ------------------------- End Handle Get All Roles ------------------------- //

    
    // ------------------------- Get Role By  Role Name  ------------------------- //

    static async getRoleByRoleName({ role_name }) {
        const getRoleName = await Roles.findOne({
            where: {
                role_name: role_name
            }
        });

        return getRoleName;
    };

    // ------------------------- End Get Role By Role Name  ------------------------- //
    

    // ------------------------- End Handle Get Role By Id ------------------------- //

    static async handleGetRoleById({ id }){
        const handleGetRoleById = await Roles.findOne({
            where: { id }
        });

        return handleGetRoleById;
    }

    // ------------------------- End Handle Get Role By Id ------------------------- //

    // ------------------------- Create Role  ------------------------- //
    
    static async createNewRole({ role_name }) {
        const createdRole = Roles.create({
            role_name
        });

        return createdRole;
    };
    
    // ------------------------- End Create Role  ------------------------- //

    // ------------------------- Update Role  ------------------------- //
    
    static async handleUpdateRoles({ id, role_name }) {

        const updatedRole = await Roles.update({
            role_name
        }, {
            where: { id },
        });

        return updatedRole;
        
    };

    // ------------------------- End Update Role  ------------------------- //

    // ------------------------- Handle Delete Roles ------------------------- //

    static async handleDeleteRoles({ id }) {
        
        const deletedRoles = await Roles.destroy({ where: { id } });

        return deletedRoles;
    }

    // ------------------------- End Handle Delete Roles ------------------------- //
}

module.exports = RolesRepository;
const rolesService = require("../services/rolesService");


// ------------------------- Handle Create Role ------------------------- //

const handleCreateRole = async (req, res) => {
    const { role_name } = req.body;

    const { status, status_code, message, data} = await rolesService.handleCreateRole({
        role_name
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};
// ------------------------- End handle Create Role ------------------------- //


// ------------------------- Handle Get All Roles ------------------------- //

const handleGetAllRoles = async (req, res) => {
    
    const { status, status_code, message, data} = await rolesService.handleGetAllRoles();

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get All Roles ------------------------- //


// ------------------------- Handle Get Role By Id ------------------------- //

const handleGetRoleById = async (req, res) => {
    
    const { id } = req.params;

    const { status, status_code, message, data} = await rolesService.handleGetRoleById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Get Role By Id ------------------------- //


// ------------------------- Handle Update Roles ------------------------- //

const handleUpdateRoles = async (req, res, next) => {

    const { id } = req.params;
    const { role_name } = req.body;

    const { status, status_code, message, data} = await rolesService.handleUpdateRoles({
        id,
        role_name
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

};


// ------------------------- End Handle Update Users ------------------------- //


// ------------------------- Handle Delete  Users ------------------------- //

const handleDeleteRoles = async (req, res, next) => {
    const { id } = req.params;

    const { status, status_code, message, data } = await rolesService.handleDeleteRoles({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}


// ------------------------- End Handle Delete Users ------------------------- //


module.exports = { 
    handleCreateRole,
    handleUpdateRoles, 
    handleGetAllRoles, 
    handleGetRoleById, 
    handleDeleteRoles
};

